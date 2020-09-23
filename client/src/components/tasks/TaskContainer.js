import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { fetchTasks, updateTask } from '../../actions/tasks';
import PropTypes from 'prop-types';

function TaskContainer({ fetchTasks, updateTask, tasks, filterProp }) {
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const completed = tasks
    .filter((t) => t.completed === true)
    .map((t) => <Task key={t._id} task={t} />);

  const todo = tasks
    .filter((t) => t.completed === false)
    .map((t) => (
      <Task
        key={t._id}
        task={t}
        triggerTaskDone={() => {
          updateTask(t._id);
        }}
      />
    ));

  return <Fragment>{filterProp ? todo : completed}</Fragment>;
}

TaskContainer.propTypes = {
  updateTask: PropTypes.func.isRequired,
  fetchTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
});

export default connect(mapStateToProps, { fetchTasks, updateTask })(
  TaskContainer
);
