import * as mainTypes from '../types/mainTypes';

export const searchRepos = (payload, onSuccess, onFail) => dispatch => {
  dispatch({ type: mainTypes.SEARCH_REPO_REQUEST });
  fetch(`https://api.github.com/users/${payload}/repos`)
    .then(res => res.json())
    .then(data => dispatch(searchSuccess(data)))
    .catch(err => dispatch(searchError()));
};

const searchSuccess = payload => ({
  type: mainTypes.SEARCH_REPO_SUCCESS,
  payload,
});

const searchError = () => ({ type: mainTypes.SEARCH_REPO_SUCCESS });

export const getRepo = (payload, onSuccess, onFail) => dispatch => {
  dispatch({ type: mainTypes.GET_REPO_REQUEST });
  fetch(`https://api.github.com/repos/${payload.name}/${payload.repoName}`)
    .then(res => res.json())
    .then(data => dispatch(getRepoSuccess(data)))
    .catch(err => dispatch(getRepoError()));
};

const getRepoSuccess = payload => ({
  type: mainTypes.GET_REPO_SUCCESS,
  payload,
});

const getRepoError = () => ({ type: mainTypes.GET_REPO_ERROR });