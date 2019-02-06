import React from 'react';

class ImageUpload extends React.Component {
  state = {
    selectedFile: null
  }
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  render() {
    return (
      <input type="file" onChange={this.fileSelectedHandler} />
    )
  }
}