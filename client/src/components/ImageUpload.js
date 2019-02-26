import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class ImageUpload extends React.Component {
  state = {
    selectedFile: null,
    avatar: null
  }

  fileSelectedHandler1 = e => {
    console.log(e.target.files[0])
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
    fetch(`/api/users/11`, {
      method: 'PUT',
      body: data,
    })
  }

  render() {
    return (
      <Body>
      <input type="file" onChange={this.fileSelectedHandler1} />
      <button onClick={this.fileUploadHandler1}>Upload</button>
      <p id="progress"></p>
      </Body>
    )
  }
}

const Body = styled.div`
padding-top: 10em;
`


export default ImageUpload
