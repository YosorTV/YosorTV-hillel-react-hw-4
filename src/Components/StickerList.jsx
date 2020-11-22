import React, {Fragment} from 'react';

import Sticker from './Sticker';

const StickerList = ({ stickers, onEdit, onChange, onRemove, onSave }) => {
  return (
    <Fragment>
      {stickers.map((sticker) => (
        <Sticker 
        key={sticker.id}
        sticker={sticker}
        onRemove={onRemove}
        onEdit={onEdit}
        onChange={onChange}
        onSave={onSave}
        />
      ))}
    </Fragment>
  );
}


export default StickerList;