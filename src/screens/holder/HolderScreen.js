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
    tabBarLabel: '股东查询',
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
    this.searchStockHolder = this.searchStockHolder.bind(this);
  }

  state = {
    stockCode: '',
    page: 1,
    stock: [],
    holder: [],
  }

  componentDidMount() {
    const params = {
      type: 'fetchStock',
      page: this.state.page,
    };
    this.fetchStock(params);
  }

  search(title) {
    this.setState({ stockCode: title });
  }

  searchStockHolder() {
    this.fetchHolder({ type: 'fetchHolder', companyCode: this.state.stockCode });
  }

  async fetchStock(params) {
    const response = await this.props.api.fetchStock(params);
    console.log(response);
    this.setState({ stock: response });
  }

  async fetchHolder(params) {
    const response = await this.props.api.fetchHolder(params);
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
      console.log('render stock card');
      stock = (<StockCard stocks={this.state.stock} />);
    }

    if (this.state.holder) {
      console.log('render holder card');
      holder = (<HolderCard holders={this.state.holder} />);
    }

    return (
      <View style={styles.root}>
        <Tabs initialPage={1}>
          <Tab heading='股票查询'>
            <View style={styles.stockContainer}>
              {stock}
            </View>
          </Tab>
          <Tab heading='股东查询' >
            <View style={styles.searchContainer}>
              <View style={styles.searchBar}>
                <View style={styles.searchTool}>
                  <SearchBar
                    lightTheme
                    onChangeText={this.search}
                    placeholder='Type Here...'
                  />
                </View>
                <View style={styles.searchBtnContainer}>
                  <Button bordered light onPress={this.searchStockHolder}>
                    <Text style={Fonts.searchText}>搜索</Text>
                  </Button>
                </View>
              </View>
            </View>
            <View style={styles.holderContainer}>
              {holder}
            </View>
          </Tab>
        </Tabs>
      </View>
    );
  }
}

export default HolderScreen;
