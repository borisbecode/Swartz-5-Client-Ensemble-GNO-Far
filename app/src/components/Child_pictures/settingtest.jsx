import * as React from 'react'
import axios from 'axios'
class Dashboard extends React.Component {
  state = {
    bgImg: null,
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/articles/uploads/`, {
        responseType: 'arraybuffer',
      })
      .then((response) => {
        const image = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        )
        const imageBase64 = `data:${response.headers[
          'content-type'
        ].toLowerCase()};base64,${image}`
        this.setState({ bgImg: imageBase64 })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return <div style={{ backgroundImage: `url(${this.state.bgImg})` }}></div>
  }
}

export default Dashboard
