// If application requires Asyncronous actions
import axios from 'axios';
export const ACTION_NAME = "ACTION_NAME";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_START = "LOGIN_START";

// This is an async action creator.
export const login = (user) => dispatch => {
	dispatch({ type: LOGIN_START });
	axios.post('http://localhost:5000/api/auth/login', user)
		.then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data.quote }))
		.catch(err => dispatch({ type: LOGIN_START, payload: err }))
};

// This is a sync action creator
export const actionName = payload => ({
	type: ACTION_NAME,
	payload: payload
});