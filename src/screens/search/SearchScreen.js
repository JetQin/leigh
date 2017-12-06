import React, { Component } from 'react';
import { View, Image, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons/';
import { Icon, Button, Tabs, Tab } from 'native-base';
import Colors from '../../../constants/Colors';
import styles from './styles/SearchScreen';

class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: ( 
      <View style={{ flexDirection: 'row', borderBottomColor: Colors.$navigationHeaderTextColor, borderBottomWidth: 3 }}>
        <Image source={require('../../../assets/imgs/logo.png')} style={styles.logo} />
        <View style={{ width: '90%', flexDirection: 'row', marginLeft: '2%', alignItems: 'center', position: 'relative' }}>
          <TextInput 
            placeholder="请输入关键词 按Enter搜索" 
            underlineColorAndroid='transparent'
            style={{
              borderRadius: 20, 
              margin: '2%', 
              marginLeft: '2%', 
              padding: '1%', 
              height: 30, 
              borderWidth: 1, 
              borderColor: '#ccc',
              width: '85%',
              backgroundColor: '#EEEEEE', 
            }}
          />
          <Icon name="ios-search" style={{ position: 'absolute', right: '14%', fontSize: 20 }} /> 
          <Button transparent onPress={() => navigation.goBack()} style={{ marginLeft: '3%', width: 26, height: 26, borderRadius: 13, backgroundColor: 'red' }}>
            <FontAwesome name="remove" size={10} style={{ fontSize: 20, color: Colors.$navigationHeaderTextColor }} />
          </Button> 
        </View> 
      </View>
    ),
  });
  render() {
    return (
      <View style={styles.root}>
        <Tabs initialPage={0} >
          <Tab heading='搜行情' />
          <Tab heading='搜新闻' />
        </Tabs>
      </View>

    );
  }
}

export default SearchScreen;
