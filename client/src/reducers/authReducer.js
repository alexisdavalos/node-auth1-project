// Create a new reducer and import actions from appropriate action file; in this case it's index.js
import { LOGIN_START, LOGIN_SUCCESS } from '../actions';

const initialState = {
  isLoggedIn: false,
  isFetching: false,
  error: ''
}

export const authReducer = (state = initialState, action) => {
	switch(action.type){
		case LOGIN_START:
			return {
				...state,
				isFetching: !state.isFetching,
				error: action.payload ? action.payload : ''
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				isFetching: false,
                error: ''
            }
		default:
				return state;
	}
}
	