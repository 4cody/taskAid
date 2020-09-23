import { SET_TASKS, ADD_TASK, UPDATE_TASK } from '../actions/types';

const initialState = {
  tasks: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: payload,
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [payload, ...state.tasks],
      };

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === payload._id ? { ...task, completed: true } : task
        ),
      };

    default:
      return state;
  }
}
