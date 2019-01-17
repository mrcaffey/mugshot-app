import axios from 'axios';
const USERS = 'USERS';
const USER = 'USER';

export const getUsers = () => {
  return (dispatch) => {
    axios.get('/api/users')
      .then( res => {
        dispatch({ type: USERS, users: res.data })
      })
    }
}

export const getUser =(id) => {
  return (dispatch) => {
    axios.get(`/api/users/${id}`)
      .then( res => {
        dispatch({ type: USER, user: res.data})
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
