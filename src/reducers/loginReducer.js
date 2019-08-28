import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../actions/actionTypes';

function loginReducer(state = {
  user: null,
  fetching: false,
  isAuthed: false
}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.creds,
        fetching: true,
        isAuthed: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.creds,
        fetching: false,
        isAuthed: true
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        fetching: false,
        isAuthed: false
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        fetching: false,
        isAuthed: false
      }
    default:
      return state
  }
}

export default loginReducer;