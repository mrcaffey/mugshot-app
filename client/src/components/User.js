import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../reducers/users';

class User extends React.Component {
    state = {users: []}
  
    componentDidMount(){
      const { dispatch } = this.props
      dispatch(getUsers())
    }
  
    render() {
      return(
        null
      )
    }
  }

const mapStateToProps = (state) => {
  return { users: state.users };
}

export default connect(mapStateToProps)(User)
