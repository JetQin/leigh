import React, { Component } from 'react';
import { WebView } from 'react-native';

class ViewHtml extends Component {
  state = {};
  // componentDidMount() {
  //
  //   axios.get(url).then((response) => {
  //     this.setState({ data: response });
  //   });
  // }

  render() {
    const url = this.props.navigation.state.params.uri;
    return (
      <WebView source={{ uri: url }} />
    );
  }
}

export default ViewHtml;
