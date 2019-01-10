import axios from 'axios';
const USERS = 'USERS';

export const getUsers = () => {
  return (dispatch) => {
    axios.get('/api/users')
      .then( res => {
        dispatch({ type: USERS, users: res.data })
      })
    }
  }

  export default (state = [], action ) => {
    switch(action.type) {
      case USERS:
        return action.users
      default:
        return state
    }
  }
