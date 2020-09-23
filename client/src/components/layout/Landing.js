import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { login, register } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';

const Landing = ({ isAuthenticated, login, register }) => {
  const [formIsToggled, formToggle] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  const handleFormToggle = () => formToggle(!formIsToggled);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    !formIsToggled ? login(email, password) : register(formData);
  };

  const provideForm = () =>
    !formIsToggled ? (
      <Fragment>
        <input
          type='text'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
          required
        />
        <input
          type='text'
          placeholder='Password'
          name='password'
          value={password}
          onChange={onChange}
          required
        />
      </Fragment>
    ) : (
      <Fragment>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
          required
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
          required
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={onChange}
          required
        />
        <input
          type='password'
          placeholder='Confirm Password'
          name='password2'
          value={password2}
          onChange={onChange}
          required
        />
      </Fragment>
    );

  return (
    <div className='landing'>
      <div className='login-container'>
        <div className='login-left'>
          <button className='btn' onClick={handleFormToggle}>
            {formIsToggled ? 'Login' : 'Sign Up'}
          </button>
        </div>
        <div className='login-right'>
          {provideForm()}
          <button className='btn' onClick={onSubmit}>
            {formIsToggled ? 'Sign up' : 'Login'}
          </button>
        </div>
      </div>
      <div className='divider'>
        Task<span>Aid</span>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, register })(Landing);
