import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Tabs, Tab, Icon, Button } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons/';

import { StockCard, HolderCard } from './components';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import styles from './styles/HolderScreen';
import Fonts from '../../../constants/Fonts';
import { WordpressApi } from '../../../constants/api';

const api = new WordpressApi();

class HolderScreen extends Component {
  static defaultProps = {
    api,
  }

  static navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: Colors.$redColor },
    headerLeft: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image source={require('../../../assets/imgs/logo.png')} style={styles.logo} />
        <Text style={styles.title}>新历财经</Text>
      </View>
    ),
    headerRight: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon name='md-search' style={{ fontSize: 30, color: Colors.$whiteColor }} />
        </Button>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <MaterialCommunityIcons name='share' style={{ fontSize: 30, color: Colors.$whiteColor }} />
        </Button>
      </View>
    ),
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name="account-card-details" size={25} color={tintColor} />
    ),
  });

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.searchStock = this.searchStock.bind(this);
  }

  state = {
    stockCode: '',
    companyName: '',
    stock: '',
    holder: '',
  }

  search(title) {
    this.setState({ stockCode: title });
  }

  searchStock() {
    const params = {
      type: 'fetchStock',
      companyCode: this.state.stockCode,
    };
    this.fetchStock(params);
  }

  async fetchStock(params) {
    const response = await this.props.api.fetchStock(params);
    this.setState({ stock: response[0] });
    console.log(response);
    this.fetchHolder({ type: 'fetchHolder', companyCode: this.state.stockCode });
  }

  async fetchHolder(params) {
    const response = await this.props.api.fetchHolder(params);
    console.log(response);
    this.setState({ holder: response });
  }

  render() {
    let stock = (
      <View />
    );
    let holder = (
      <View />
    );

    if (this.state.stock) {
      stock = (
        <StockCard stock={this.state.stock} />
      );
    }
    if (this.state.holder) {
      holder = (
        <HolderCard holders={this.state.holder} />
      );
    }
    return (
      <View style={styles.root}>
        <View style={styles.searchContainer}>
          <SearchBar
            lightTheme
            onChangeText={this.search}
            placeholder='Type Here...'
          />
        </View>
        <View style={styles.searchBtnContainer}>
          <Button title='搜索' backgroundColor={Colors.$blackBlueColor} color={Colors.$whiteColor} onPress={this.searchStock} />
        </View>
        <View style={styles.stockContainer}>
          {stock}
        </View>

        <View style={styles.holderContainer}>
          {holder}
        </View>
      </View>
    );
  }
}

export default HolderScreen;
