import React from 'react';

const TaskItem = props => {
  return (
    <li>
      <span>{props.content}</span>
      <button onClick={props.onTaskCompletion}>X</button>
    </li>
  );
};

export default TaskItem;
