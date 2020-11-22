import React from 'react';
import './index.scss';

const Sticker = ({sticker, onChange, onRemove, onSave, onEdit}) => {

let prevPosition = {x:0, y:0};

const dragging = (({clientX, clientY}) => {
  const { x, y } = sticker;
    onChange(sticker.id, {
      x: x + (clientX - prevPosition.x),
      y: y + (clientY - prevPosition.y)
  });
})

const stopDrag = () => {
  document.removeEventListener('mousemove', dragging);
  document.removeEventListener('mouseup', stopDrag);
}

const startDrag = (({clientX, clientY}) => {
  prevPosition = {
    x: clientX,
    y: clientY
  };
  document.addEventListener('mousemove', dragging);
  document.addEventListener('mouseup', stopDrag);
})

  const getStickerStyle = () => {
    const {x , y} = sticker;
    return {
      top: y,
      left: x
    }
  }

  return(
    <div style={getStickerStyle()} className="sticker">
      <div className="button-group">

        <button onMouseDown={startDrag} onMouseUp={() => onSave(sticker.id)}>
          <i className="far fa-dot-circle" />
        </button>

          <span>{sticker.title} №{sticker.id}</span>

        <button onClick={() => onEdit(sticker)}>
          <i className="fas fa-edit"></i>
        </button>

        <button onClick={() => onRemove(sticker)}>
          <i className="fa fa-plus" aria-hidden="true" />
        </button>

      </div>
      <textarea 
        name="description"
        readOnly={true}
        value={sticker.description}
        onBlur={() => onSave(sticker.id)}
      />
    </div>
  )
}

export default Sticker;
