import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Header } from 'semantic-ui-react';
import Mugshot1 from '../Images/Mugshot1.jpeg'
import Mugshot2 from '../Images/Mugshot2.jpeg';
import Mugshot3 from '../Images/Mugshot3.jpeg';

class Home extends Component {

  state = { 
    i: 0,
    photos: [
      <Loop src={Mugshot2} alt="mugshot"/>,
      <Loop src={Mugshot1} alt="mugshot"/>,
      <Loop src={Mugshot3} alt="mugshot"/>,
  ],
   }

   componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({i: this.state.i + 1})
      if(this.state.i >= this.state.photos.length){
        this.setState({i: 0})
      }
    }, 2000)
  }
  // Interval must be double of Animation length

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  ArrayLoop = () => {
    let {i, photos} = this.state
    for(i; photos.length;){
      return(photos[i])
    }
  }

  render() {
    return (
      <>
      <h1 style={{ margin: '100px', padding: '10px', position: 'fixed'}}>Mugshot App</h1>
      <Center>{this.ArrayLoop()}</Center>
      </>
    );
  }
}

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
 
const animation = props =>
  css`
    ${pulse} ${props.animationLength} 1s infinite alternate; 
  `

// Animation length must be half of set interval

const Loop = styled.img`
  height: 25em;
  width: 25em;
  animation: ${animation};
  margin-right: 10em;
  margin-top: 3em;
  @media only screen and (max-width: 568px) {
    width: 10em;
    height: 10em;
  }
  @media only screen and (max-height: 411) {
    height: 15em;
    width: 15em;
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 6em;
`

export default Home;

