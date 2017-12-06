import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  inputStyle: {
    borderRadius: 3,
    margin: '2%',
    marginLeft: '2%',
    padding: '1%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  helpInfo: {
    color: 'red',
    marginLeft: 10,
  },
});

class Input extends Component { 
  static defaultProps = {
    password: false,
  };
  constructor(props) {
    super(props);
    this.state = { helpInfo: this.props.helpInfo, textValue: '' };
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus() {
    this._myInput.setNativeProps({
      style: { borderColor: '#ccc' },
    });
    this.setState({ helpInfo: '' });
  }

  render() {
    return (
      <View>
        <TextInput 
          style={styles.inputStyle} 
          placeholder={this.props.placeholder} 
          underlineColorAndroid='transparent'
          password={this.props.password}
          secureTextEntry={this.props.password}
          onFocus={this.onFocus}
          onChangeText={this.props.onChange}
          ref={(c) => { this._myInput = c; }} 
          helpInfo={this.props.helpInfo}
        />
        <Text style={styles.helpInfo} ref={(c) => { this._myText = c; }}>{this.state.helpInfo}</Text>
      </View>
    );
  }
}

export default Input;
