import React from 'react';
import axios from 'axios';

class ImageUpload extends React.Component {
  state = {
    selectedFile: null
  }
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const mugshot = new FormData();
    mugshot.append('image', this.state.selectedFile, this.state.selectedFile.name)
    axios.post("", mugshot, { onUploadProgress: progressEvent => {
      console.log("upload Progress: " + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
    }})
      .then(res => {
        console.log(res)
      });
  }

  render() {
    return (
      <>
      <input type="file" onChange={this.fileSelectedHandler} />
      <button onClick={this.fileUploadHander}>Upload</button>
      </>
    )
  }
}