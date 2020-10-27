import React, {useState, useEffect, Fragment} from 'react';
import StickerService from './StickerService';

import Header from './Components/Header';
import StickerList from './Components/StickerList';

const App = () => {

  const stickerTemplate = () => {
    return {
      id: '',
      description: '',
      x: 0,
      y: 0
    }
  }

  const [getStickers, setStickers] = useState([stickerTemplate()]);

  useEffect(() => {
    StickerService.get('/').then(({ data }) => setStickers(data));
  },[])


  const AddSticker = () => StickerService.post('', stickerTemplate()).then(({data}) => setStickers([...getStickers, data]));

  const onSubmitHanlder = e => e.preventDefault(); 

  const saveSticker = id => {
    const sticker = getStickers.find((item) => item.id === id);
      StickerService.put(id, sticker);
  };

  const removeSticker = id => {
    const removedSticker = getStickers.filter((item) => item.id !== id);
      StickerService.delete(id).then(() => setStickers(removedSticker));
  };

  const checkSticker = sticker => {
    const newStickers = getStickers.map((item) => item.id === sticker.id ? sticker : item);
      setStickers(newStickers);
  }

  const updateValue = (id, newData) => {
    let sticker = getStickers.find((item) => item.id === id);
        sticker = {
          ...sticker,
          ...newData
        }
    checkSticker(sticker);
  }

  return(
    <Fragment>
      <Header onAddSticker={AddSticker}/>
      <form onSubmit={onSubmitHanlder}>
      <StickerList
        stickers={getStickers}
        onRemove={removeSticker}
        onSave={saveSticker}
        onChange={updateValue}
      />
      </form>
    </Fragment>
  )
}

export default App;
