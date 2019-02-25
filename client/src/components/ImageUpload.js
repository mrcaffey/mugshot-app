import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class ImageUpload extends React.Component {
  state = {
    selectedFile: null,
    avatar: null
  }

  handleFileUpload = e => {
    this.setState({
      avatar: e.target.files[0],
    });
  };
  
  fileSelectedHandler = event => {
    console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  //need to learn how to get the current user for this to work
  fileUploadHandler = () => {
    const mugshot = new FormData();
    mugshot.append('image', this.state.selectedFile, this.state.selectedFile.name)
    axios.put(`api/users/11`, {
    avatar: mugshot 
    })
      .then(res => {
        console.log(res)
      });
  }

  fileUploadHandler1 = () => {
    let data = new FormData();
    data.append('avatar', this.avatar)
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/users`, {
      method: 'POST',
      body: data,
    })
  }

  render() {
    return (
      <Body>
      <input type="file" onChange={this.fileSelectedHandler} />
      <button onClick={this.fileUploadHandler}>Upload</button>
      <p id="progress"></p>
      </Body>
    )
  }
}

const Body = styled.div`
padding-top: 10em;
`


export default ImageUpload
