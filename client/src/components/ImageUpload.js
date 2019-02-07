import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class ImageUpload extends React.Component {
  state = {
    selectedFile: null
  }
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
    axios.post(`api/users/1`, mugshot)
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
