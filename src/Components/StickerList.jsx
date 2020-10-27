import React, {Fragment} from 'react';

import Sticker from './Sticker';

const StickerList = ({ stickers, onChange, onRemove, onSave }) => {
  return (
    <Fragment>
      {stickers.map((sticker) => (
        <Sticker 
          key={sticker.id}
          sticker={sticker}
          onChange={onChange}
          onRemove={onRemove}
          onSave={onSave}
        />
      ))}
    </Fragment>
  );
}


export default StickerList;