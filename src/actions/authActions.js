import * as authTypes from './../types/authTypes';

export const signIn = (payload, onSuccess, onFail) => dispatch => {
  dispatch({ type: authTypes.SIGN_IN_REQUEST });
  fetch('https://reqres.in/api/login/', payload)
    .then(res => res.json())
    .then(data => {
      if (onSuccess) onSuccess(data);
      dispatch(signInSuccess(data));
    })
    .catch(err => {
      if (onFail) onFail();
      dispatch(signInError());
    });
};

const signInSuccess = payload => ({
  type: authTypes.SIGN_IN_SUCCESS,
  payload,
});

const signInError = () => ({
  type: authTypes.SIGN_IN_ERROR,
});

export const signUp = (payload, onSuccess, onFail) => dispatch => {
  dispatch({ type: authTypes.SIGN_UP_REQUEST });
  fetch('https://reqres.in/api/register/', payload)
    .then(res => res.json())
    .then(data => {
      if (onSuccess) onSuccess(data);
      dispatch(signUpSuccess(data));
    })
    .catch(err => {
      if (onFail) onFail();
      dispatch(signUpError());
    });
};

const signUpSuccess = payload => ({
  type: authTypes.SIGN_UP_SUCCESS,
  payload,
});

const signUpError = () => ({
  type: authTypes.SIGN_UP_ERROR,
});

export const signOut = () => ({
  type: authTypes.SIGN_OUT,
});
