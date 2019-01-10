import React from 'react'
import { connect } from 'react-redux'
import {Menu,Grid, Table, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import { getUsers } from '../reducers/users'

class User extends React.Component {
  state = {users: []}

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(getUsers())
  }

  displayUsers = () => {
    const { name, phone, id, email} = this.state
    const { users } = this.props

    return(
      users.map( u => {
        return(
          <Table.Body>
            <Table.Row verticalAlign="middle" key={u.id}>
              <Table.Cell>{u.first_name}{" "}{u.last_name}</Table.Cell>
              <Table.Cell>{u.phone}</Table.Cell>
              <Table.Cell>{u.email}</Table.Cell>
            </Table.Row>
          </Table.Body>
        )
      })
    )
  }

  render(){
    return (
      <Container>
        <Header textAlign="center">Registered Users</Header>
          <Table singleLine>
            <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>E-mail address</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
            {this.displayUsers()}
          </Table>
      </Container>
    )
  }
};

const Header = styled.h1`
font-size: 35px;
`

const styledTable = styled( Table )`
  font-size: 50px;
  `

const mapStateToProps = (state) => {
  return { users: state.users };
}

export default connect(mapStateToProps)(User);