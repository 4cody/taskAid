import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskContainer from '../tasks/TaskContainer';
import AddTaskForm from '../tasks/AddTaskForm';

function Dashboard({ user }) {
  const [filter, toggleFilter] = useState(true);
  const [addTaskOverlayToggled, toggleOverlay] = useState(false);
  const [displayStyle, setDisplay] = useState({ display: 'none' });
  const [addTaskClassList, setAddTaskClassList] = useState('add-task');
  const [addTaskBtnClassList, setAddTaskBtnClassList] = useState(
    'add-task-btn'
  );

  const addTaskOverlaySwitch = (e) => {
    if (addTaskOverlayToggled) {
      setDisplay({ display: 'none' });
      setAddTaskBtnClassList('add-task-btn');
      setAddTaskClassList('add-task');
    } else {
      setDisplay({ display: 'block' });
      setAddTaskBtnClassList('add-task-btn active');
      setAddTaskClassList('add-task active');
    }

    toggleOverlay(!addTaskOverlayToggled);
  };

  const todoFilter = (
    <div className='task-filter'>
      <p className={filter ? '' : 'inactive'}>Todo</p>
      <p
        className={filter ? 'inactive' : ''}
        onClick={() => {
          toggleFilter(!filter);
        }}
      >
        Complete
      </p>
    </div>
  );

  const completeFilter = (
    <div className='task-filter'>
      <p
        className={filter ? '' : 'inactive'}
        onClick={() => {
          toggleFilter(!filter);
        }}
      >
        Todo
      </p>
      <p className={filter ? 'inactive' : ''}>Complete</p>
    </div>
  );

  return (
    <div className='task-container'>
      <div id='overlay' className='overlay' style={displayStyle}>
        <AddTaskForm passToggler={addTaskOverlaySwitch} />
      </div>
      <div className='task-filter'>{filter ? todoFilter : completeFilter}</div>
      <b className='grid-fill'>
        <div className={addTaskClassList}>
          <div className={addTaskBtnClassList} onClick={addTaskOverlaySwitch}>
            <div className='plus-l'></div>
            <div className='plus-r'></div>
          </div>
        </div>
      </b>
      <div className='greeting'>
        <h2>
          <span>Hi</span> {user.name}
        </h2>
      </div>

      <div className='tasks'>
        <TaskContainer filterProp={filter} />
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Dashboard);
