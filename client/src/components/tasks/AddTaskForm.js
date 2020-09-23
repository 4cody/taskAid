import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../actions/tasks';

function AddTaskForm({ addTask, passToggler }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const { title, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateAddTask = () => {
    if (formData.title && formData.description !== '') {
      setFormData({
        title: '',
        description: '',
      });
      passToggler();
      addTask(formData);
    }
  };

  return (
    <form
      className='add-task-form'
      onSubmit={(e) => {
        e.preventDefault();
        validateAddTask();
      }}
    >
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
        required
      />
      <textarea
        name='description'
        cols='30'
        rows='5'
        placeholder='Description'
        value={description}
        onChange={onChange}
      />
      <input type='submit' />
    </form>
  );
}

AddTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  passToggler: PropTypes.func.isRequired,
};

export default connect(null, { addTask })(AddTaskForm);
