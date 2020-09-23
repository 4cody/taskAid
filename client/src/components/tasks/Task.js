import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

function Task({ task, triggerTaskDone }) {
  return (
    <div className='task'>
      <div className='task-main'>
        <h3 className='task-title'>{task.title}</h3>
        <div className='task-date'>{task.createdAt}</div>
      </div>

      <div className='task-sub'>
        <p className='task-desc'>{task.description}</p>
        {task.completed === true ? null : (
          <button onClick={triggerTaskDone}>Done</button>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  triggerTaskDone: PropTypes.func,
};

export default Task;
