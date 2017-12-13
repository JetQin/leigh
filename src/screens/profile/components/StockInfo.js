import React, { Component } from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
// import { Button } from 'native-base';
import { Icon, List, ListItem, Button } from 'react-native-elements';
import Colors from '../../../../constants/Colors';

import styles from './styles/StockInfo';

class StockInfo extends Component {
  constructor(props) {
    super(props);
    this._onRefresh = this._onRefresh.bind(this);
    this.state = {
      refreshing: false,
      stocks: [],
    };
  }

  // componentDidMount() {
  //   this.setState({ stocks: this.props.stocks });
  //   console.log(this.state);
  // }
  onLongPress() {
    console.log('aaaaaaaaaaaa');
  }

  onPressRightIcon() {
    console.log('bbbbbbbbbbbbbbb');
  }

  _onRefresh() {
    console.log('refresh');
    this.setState({ refreshing: true });
    this.props.scroll().then(() => {
      this.setState({ refreshing: false, stocks: this.props.stocks });
    });
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl />
          // refreshing={this.state.refreshing}
          // onRefresh={this._onRefresh}
          // />
        }
      >
        <List >
          {
            this.props.stocks.map((item, i) => (
              <ListItem
                containerStyle={{
                  borderLeftWidth: 5,
                  borderStyle: 'solid',
                  borderLeftColor: item.price_change > 0 ? Colors.$redColor : Colors.$greenColor,
                }}
                key={i}
                onPress={() => (this.props.navigation.navigate('Report', { code: item.code }))}
                onLongPress={this.onLongPress}
                title={
                  <View style={{ flex: 1, flexDirection: 'row' }}>
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
                    <View style={{ flex: 0.25 }}>
                      <Button
                        containerViewStyle={{ marginRight: 0 }} 
                        buttonStyle={{ backgroundColor: '#FF7978', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} 
                        large
                        title='删除'
                      />
                    </View>
                  </View>
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
