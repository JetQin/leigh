import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Tabs, Tab, Button } from 'native-base';
import { ButtonGroup, Icon } from 'react-native-elements';

import { StockCard } from './components';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import styles from './styles/HolderScreen';
import { WordpressApi } from '../../../constants/api';

const api = new WordpressApi();

class HolderScreen extends Component {
  static defaultProps = {
    api,
  }

  static navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: Colors.$redColor },
    tabBarLabel: '市场行情',
    headerLeft: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image source={require('../../../assets/imgs/logo.png')} style={styles.logo} />
        <Text style={styles.title}>新历财经</Text>
      </View>
    ),
    headerRight: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon name='search' type='Feather' size={30} color={Colors.$whiteColor} />
        </Button>
      </View>
    ),
    tabBarIcon: ({ tintColor }) => (
      <Icon name="account-card-details" type='material-community' size={25} color={tintColor} />
    ),
  });

  constructor(props) {
    super(props);
    this.fetchStock = this.fetchStock.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
  }

  state = {
    stockCode: '',
    ascSortName: true,
    ascSortPrice: true,
    page: 1,
    stock: [],
  }

  componentDidMount() {
    const stockCard = this.stockCard;
    this.stockCard._onRefresh();
  }

  async fetchStock() {
    const params = {
      type: 'fetchStock',
      page: this.state.page,
    };
    const response = await this.props.api.fetchStock(params);
    this.setState({ stock: response, page: 1 + this.state.page });
  }

  sortByName() {
    console.log('sort by name');
    this.setState({ ascSortName: !this.state.ascSortName });
  }

  sortByPrice() {
    console.log('sort by price');
    this.setState({ ascSortPrice: !this.state.ascSortPrice });
  }

  render() {
    let stock = (
      <View />
    );
    if (this.state.stock) {
      stock = (<StockCard ref={(c) => { this.stockCard = c; }} stocks={this.state.stock} scroll={this.fetchStock} />);
    }
    const component1 = () => (
      <Button transparent onPress={this.sortByName}>
        <Text style={styles.sortText}>名称排列</Text>
        {this.state.ascSortName ?
          <Icon name="sort-up" type='font-awesome' size={25} color={Colors.$blueThemeColor} style={{ paddingTop: 5 }} />
          : <Icon name="sort-down" type='font-awesome' size={25} color={Colors.$blueThemeColor} style={{ paddingBottom: 5 }} />
        }
      </Button>);
    const component2 = () => (
      <Button transparent onPress={this.sortByPrice}>
        <Text style={styles.sortText}>涨跌排列</Text>
        {this.state.ascSortPrice ?
          <Icon name="sort-up" type='font-awesome' size={25} color={Colors.$blueThemeColor} style={{ paddingTop: 5 }} />
          : <Icon name="sort-down" type='font-awesome' size={25} color={Colors.$blueThemeColor} style={{ paddingBottom: 5 }} />
        }
      </Button>);
    const buttons = [{ element: component1 }, { element: component2 }];
    return (
      <View style={styles.root}>
        <Tabs initialPage={1}>
          <Tab heading='沪深'>
            <ButtonGroup
              // onPress={this.updateIndex}
              // selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{ height: 30 }}
            />
            <View style={styles.stockContainer}>
              {stock}
            </View>
          </Tab>
          <Tab heading='美股' >
            <View style={styles.stockContainer}>
              {stock}
            </View>
          </Tab>
        </Tabs>
      </View>
    );
  }
}

export default HolderScreen;
