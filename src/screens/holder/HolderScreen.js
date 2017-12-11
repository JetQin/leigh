import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Tabs, Tab, Button } from 'native-base';
import { ButtonGroup, Icon } from 'react-native-elements';

import { StockCard } from './components';
import Colors from '../../../constants/Colors';
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
    this.fetchNasdaqStock = this.fetchNasdaqStock.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortNasdaqByName = this.sortNasdaqByName.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
    this.sortNasdaqByPrice = this.sortNasdaqByPrice.bind(this);
  }

  state = {
    stock: {
      data: [],
      page: 1,
      ascSortName: true,
      ascSortPrice: true,
    },
    nasdaq_stock: {
      data: [],
      page: 1,
      ascSortName: true,
      ascSortPrice: true,
    },
  }

  componentDidMount() {
    const stockCard = this.stockCard;
    const nasdaqStockCard = this.nasdaqStockCard;
  }

  async fetchStock() {
    const params = {
      type: 'fetchStock',
      page: this.state.stock.page,
    };
    const response = await this.props.api.fetchStock(params);
    this.setState({
      stock: {
        data: response,
        page: 1 + this.state.stock.page,
        ascSortName: this.state.stock.ascSortName,
        ascSortPrice: this.state.stock.ascSortPrice },
    });
  }

  async fetchNasdaqStock() {
    const params = {
      type: 'fetchStock',
      page: this.state.nasdaq_stock.page,
    };
    const response = await this.props.api.fetchStock(params);
    this.setState({
      nasdaq_stock: {
        data: response,
        page: 1 + this.state.nasdaq_stock.page,
        ascSortName: this.state.nasdaq_stock.ascSortName,
        ascSortPrice: this.state.nasdaq_stock.ascSortPrice },
    });
  }

  sortByName() {
    console.log(this.state);
    this.setState({ stock: {
      data: this.state.stock.data,
      page: this.state.stock.page,
      ascSortName: !this.state.stock.ascSortName,
      ascSortPrice: this.state.stock.ascSortPrice,
    } });
    this.state.stock.data.sort((a, b) => (
      this.state.stock.ascSortName ? a.code > b.code : a.code < b.code
    ));
  }

  sortNasdaqByName() {
    console.log(this.state);
    this.setState({ nasdaq_stock: {
      data: this.state.nasdaq_stock.data,
      page: this.state.nasdaq_stock.page,
      ascSortName: !this.state.nasdaq_stock.ascSortName,
      ascSortPrice: this.state.nasdaq_stock.ascSortPrice,
    } });
    this.state.nasdaq_stock.data.sort((a, b) => (
      this.state.nasdaq_stock.ascSortName ? a.code > b.code : a.code < b.code
    ));
  }

  sortByPrice() {
    console.log(this.state);
    this.setState({ stock: {
      data: this.state.stock.data,
      page: this.state.stock.page,
      ascSortName: this.state.stock.ascSortName,
      ascSortPrice: !this.state.stock.ascSortPrice,
    } });
    this.state.stock.data.sort((a, b) => (
      this.state.stock.ascSortPrice ? a.price_change > b.price_change : a.price_change < b.price_change
    ));
  }

  sortNasdaqByPrice() {
    console.log(this.state);
    this.setState({ nasdaq_stock: {
      data: this.state.nasdaq_stock.data,
      page: this.state.nasdaq_stock.page,
      ascSortName: this.state.nasdaq_stock.ascSortName,
      ascSortPrice: !this.state.nasdaq_stock.ascSortPrice,
    } });
    this.state.nasdaq_stock.data.sort((a, b) => (
      this.state.nasdaq_stock.ascSortPrice ? a.price_change > b.price_change : a.price_change < b.price_change
    ));
  }

  changeTab(ref) {
    if (ref.props.heading === '沪深') {
      this.stockCard._onRefresh();
    }
    if (ref.props.heading === '美股') {
      this.nasdaqStockCard._onRefresh();
    }
  }

  render() {
    let stock = (
      <View />
    );
    let nasdaqStock = (
      <View />
    );
    if (this.state.stock) {
      stock = (
        <StockCard
          ref={(c) => { this.stockCard = c; }}
          stocks={this.state.stock.data} scroll={this.fetchStock}
          navigation={this.props.navigation}
        />);
    }
    if (this.state.nasdaq_stock) {
      nasdaqStock = (
        <StockCard
          ref={(c) => { this.nasdaqStockCard = c; }}
          stocks={this.state.nasdaq_stock.data}
          scroll={this.fetchNasdaqStock}
          navigation={this.props.navigation}
        />);
    }
    const component1 = () => (
      <Button transparent onPress={this.sortByName}>
        <Text style={styles.sortText}>名称排列</Text>
        {this.state.stock.ascSortName ?
          <Icon name="sort-up" type='font-awesome' size={25} color={Colors.$blueThemeColor} style={{ paddingTop: 5 }} />
          : <Icon name="sort-down" type='font-awesome' size={25} color={Colors.$blueThemeColor} style={{ paddingBottom: 5 }} />
        }
      </Button>);
    const component2 = () => (
      <Button transparent onPress={this.sortByPrice}>
        <Text style={styles.sortText}>涨跌排列</Text>
        {this.state.stock.ascSortPrice ?
          <Icon name="sort-up" type='font-awesome' size={25} color={Colors.$blueThemeColor} style={{ paddingTop: 5 }} />
          : <Icon name="sort-down" type='font-awesome' size={25} color={Colors.$blueThemeColor} style={{ paddingBottom: 5 }} />
        }
      </Button>);
    const component3 = () => (
      <Button transparent onPress={this.sortNasdaqByName}>
        <Text style={styles.sortText}>名称排列</Text>
        {this.state.nasdaq_stock.ascSortName ?
          <Icon name="sort-up" type='font-awesome' size={25} color={Colors.$blueThemeColor} style={{ paddingTop: 5 }} />
          : <Icon name="sort-down" type='font-awesome' size={25} color={Colors.$blueThemeColor} style={{ paddingBottom: 5 }} />
        }
      </Button>);
    const component4 = () => (
      <Button transparent onPress={this.sortNasdaqByPrice}>
        <Text style={styles.sortText}>涨跌排列</Text>
        {this.state.nasdaq_stock.ascSortPrice ?
          <Icon name="sort-up" type='font-awesome' size={25} color={Colors.$blueThemeColor} style={{ paddingTop: 5 }} />
          : <Icon name="sort-down" type='font-awesome' size={25} color={Colors.$blueThemeColor} style={{ paddingBottom: 5 }} />
        }
      </Button>);
    const buttons = [{ element: component1 }, { element: component2 }];
    const nasdaqButtons = [{ element: component3 }, { element: component4 }];
    return (
      <View style={styles.root}>
        <Tabs initialPage={1} onChangeTab={({ ref }) => this.changeTab(ref)}>
          <Tab heading='沪深'>
            <ButtonGroup
              buttons={buttons}
              containerStyle={{ height: 30 }}
            />
            <View style={styles.stockContainer}>
              {stock}
            </View>
          </Tab>
          <Tab heading='美股' >
            <ButtonGroup
              buttons={nasdaqButtons}
              containerStyle={{ height: 30 }}
            />
            <View style={styles.stockContainer}>
              {nasdaqStock}
            </View>
          </Tab>
        </Tabs>
      </View>
    );
  }
}

export default HolderScreen;
