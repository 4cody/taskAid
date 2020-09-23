import api from '../utils/api';
import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from './types';

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/users', formData);

    // localStorage.setItem('token', res.data.token)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    // dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    console.log(errors);

    // dispatch({
    //   type: REGISTER_FAIL
    // });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post('/users/login', body);

    localStorage.setItem('token', res.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    // dispatch(loadUser());
  } catch (err) {
    console.log(err);
    // const errors = err.response.data.errors;

    // console.log(errors);

    //   dispatch({
    //     type: LOGIN_FAIL,
    //   });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
