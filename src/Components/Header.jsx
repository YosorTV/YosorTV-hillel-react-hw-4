import React from 'react';
import './index.scss';

const Header = ({onAddSticker}) => {
  return (
      <header className="header_desk">
        <button onClick={onAddSticker} className="add_sticker">Add Sticker</button>
      </header>
  );
}

export default Header;
