import React from 'react';

const EditCount = props => {
  return (
    <div>
      <input
        type="number"
        value={props.count}
        onChange={event => props.onEdit(event.target.valueAsNumber)}
      />
      <button onClick={() => props.onEdit(props.count + 10)}>Increment by 10</button>
    </div>
  );
};

export default EditCount;
