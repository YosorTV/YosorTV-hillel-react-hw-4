import React, {useState, useEffect, Fragment} from 'react';
import {Route, useHistory} from 'react-router-dom';
import StickerService from './StickerService';

import Header from './Components/Header';
import StickerList from './Components/StickerList';
import Modal from './Components/Modal';

const App = () => {
  
  const stickerTemplate = () => {
    return {
      title: '',
      description: '',
      x: 0,
      y: 0,
      id:0
    }
  }

    const [stickers, setStickers] = useState([stickerTemplate()]);
    const [selectedSticker, setSelectedSticker] = useState([stickerTemplate()])
    const history = useHistory();

    const getStickers = async () => {
      const { data } = await StickerService.get('/');
      return setStickers(data)
    }

    useEffect(() => getStickers(), []);

    const openForm = () => history.push('/form');

    const addSticker = () => {
      setSelectedSticker(stickerTemplate());
      return openForm();
    }

    const editSticker = sticker => {
      setSelectedSticker(sticker);
      return openForm();
    }

    const createSticker = async sticker => {
      const { data } = await StickerService.post('', sticker);
      return setStickers([...stickers, data]);
    }

    const checkSticker = sticker => {
      const newStickers = stickers.map((item) => item.id === sticker.id ? sticker : item);
      return setStickers(newStickers);
    }

    const changeSticker = (id, updatedData) => {
      let sticker = stickers.find((item) => item.id === id);
        sticker = {
          ...sticker,
          ...updatedData,
      };
      return checkSticker(sticker);
  }

    const updateSticker = sticker => {
      changeSticker(sticker.id, sticker);
      return sendSticker(sticker);
    }

    const saveSticker = sticker => {
      sticker.id 
      ? updateSticker(sticker) 
      : createSticker(sticker);
    }

    const removeSticker = sticker => {
      setStickers(stickers.filter((item) => item !== sticker));
      return StickerService.delete(sticker.id);
    }

    const sendSticker = value => {
      const sticker = (typeof value === "object") ? value : stickers.find(item => item.id === value);
      return StickerService.put(sticker.id, sticker);
    }

  return(
    <Fragment>
      <Header onAddSticker={addSticker}/>
      <div className="form">
      <StickerList
        stickers={stickers}
        onRemove={removeSticker}
        onEdit={editSticker}
        onChange={changeSticker}
        onSave={sendSticker}
      />
        <Route path="/form">
          <Modal sticker={selectedSticker} onSave={saveSticker}/>
        </Route>
      </div>
    </Fragment>
  )
}

export default App;
