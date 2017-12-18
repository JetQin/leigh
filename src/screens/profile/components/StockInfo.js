import React, { Component } from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';
import { SwipeRow, Button } from 'native-base';
import Colors from '../../../../constants/Colors';

import styles from './styles/StockInfo';

class StockInfo extends Component {
  constructor(props) {
    super(props);
    this._onRefresh = this._onRefresh.bind(this);
    this._deleteStock = this._deleteStock.bind(this);
    this.open = this.open.bind(this);
    this.state = {
      refreshing: false,
      stocks: [],
    };
  }

  componentDidMount() {
    this.setState({ stocks: this.props.stocks });
    console.log(this.state);
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    this.props.scroll().then(() => {
      this.setState({ refreshing: false, stocks: this.props.stocks });
    });
  }

  _deleteStock(code) {
    this.props.delete(code);
  }
  open() {
    console.log('open');
  }

  render() {
    if (!this.props.stocks) {
      return (<View />);
    }
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        <List style={{ marginTop: 0 }}>
          {
            this.props.stocks.map((item, i) => (
              <ListItem
                style={{ padding: 0, margin: 0, borderBottomWidth: 1, borderBottomColor: '#BBB' }}
                containerStyle={{
                  borderLeftWidth: 5,
                  borderStyle: 'solid',
                  borderLeftColor: item.price_change > 0 ? Colors.$redColor : Colors.$greenColor,
                }}
                key={i}
                title={
                  <SwipeRow
                    ref={(c) => { this.row = c; }}
                    rightOpenValue={-80}
                    body={
                      <View style={{ flex: 0.75 }}>
                        <View style={styles.header}>
                          <View style={styles.headerLeft}>
                            <Text style={styles.headerText}>{item.name}</Text>
                          </View>
                          <View style={styles.headerCenter}>
                            <Text style={styles.headerText}>{item.open}</Text>
                          </View>
                          <View style={styles.headerRight}>
                            <Text style={item.price_change > 0 ? styles.headerRedText : styles.headerGreenText}>{item.price_change}</Text>
                          </View>
                        </View>
                        <View style={styles.footer}>
                          <View style={styles.footerLeft}>
                            <Text style={styles.footerText}>{ item.code }</Text>
                          </View>
                          <View style={styles.footerCenter}>
                            <Text style={styles.footerText}>2:59 PM</Text>
                          </View>
                          <View style={styles.footerRight}>
                            {
                              item.price_change > 0 ?
                                (<Icon type='font-awesome' name='sort-up' color={Colors.$redColor} iconStyle={{ paddingLeft: 20 }} />) :
                                (<Icon type='font-awesome' name='sort-down' color={Colors.$greenColor} iconStyle={{ paddingLeft: 20 }} />)
                            }
                            <Text style={item.price_change > 0 ? styles.footerRedText : styles.footerGreenText}>{ item.p_change }%</Text>
                          </View>
                        </View>
                      </View>
                    }
                    right={
                      <Button danger onPress={() => this._deleteStock(item.code)}>
                        <Text>删除</Text>
                      </Button>
                    }
                  />
                }
                hideChevron
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

export default StockInfo;
