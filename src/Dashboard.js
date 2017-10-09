import React, { Component } from 'react';
import { ScrollView, Text, TextInput, View,Image } from 'react-native';
import FlatListBasics from './components/FlatListBasics';
import SectionListBasics from './components/SectionListBasics';
import { StackNavigator} from 'react-navigation';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <ScrollView style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <FlatListBasics/>
        <SectionListBasics/>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 400, height: 400}} />
      </ScrollView>
    );
  }
}
export default Dashboard;
