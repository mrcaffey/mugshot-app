import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class ImageUpload extends React.Component {
  state = {
    selectedFile: null
  }
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  //need to learn how to get the current user for this to work
  fileUploadHandler = () => {
    const mugshot = new FormData();
    mugshot.append('image', this.state.selectedFile, this.state.selectedFile.name)
    axios.post(`api/users/`/*${currentUser.id}*/, mugshot, { onUploadProgress: progressEvent => {
      document.getElementById("progress").innerHTML = 'upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%'
    }})
      .then(res => {
        console.log(res)
      });
  }

  render() {
    return (
      <Body>
      <input type="file" onChange={this.fileSelectedHandler} />
      <button onClick={this.fileUploadHander}>Upload</button>
      <p id="progress"></p>
      </Body>
    )
  }
}

const Body = styled.div`
padding-top: 10em;
`


export default ImageUpload
