import {LOGIN_USER} from '../actions/types'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER :
      return{
        ...state,
        loginSuccess:action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
