import api from '../utils/api';
import { SET_TASKS, ADD_TASK, UPDATE_TASK } from '../actions/types';

export const fetchTasks = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  const res = await api.get('/tasks', config);

  dispatch({
    type: SET_TASKS,
    payload: res.data,
  });
};

export const addTask = (newTask) => async (dispatch) => {
  const token = localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  const body = newTask;

  const res = await api.post('/tasks', body, config);

  console.log(newTask);
  console.log('in addtask action');

  dispatch({
    type: ADD_TASK,
    payload: res.data,
  });
};

export const updateTask = (taskID) => async (dispatch) => {
  const token = localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  const body = {
    completed: true,
  };

  const res = await api.patch(`tasks/${taskID}`, body, config);

  dispatch({
    type: UPDATE_TASK,
    payload: res.data,
  });
};
