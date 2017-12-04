import React, { Component } from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';
import Colors from '../../../../constants/Colors';

import styles from './styles/StockCard';

class StockCard extends Component {
  constructor(props) {
    super(props);
    this._onRefresh = this._onRefresh.bind(this);
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
    console.log('refresh');
    this.setState({ refreshing: true });
    this.props.scroll().then(() => {
      this.setState({ refreshing: false, stocks: this.props.stocks });
    });
  }

  borderColor(value) {
    return {
      borderLeftWidth: 5,
      borderStyle: 'solid',
      borderLeftColor:  value > 0 ? Colors.$redColor : Colors.$greenColor,
    }
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        <List >
          {
            this.state.stocks.map((item, i) => (
              <ListItem
                containerStyle={{
                  borderLeftWidth: 5,
                  borderStyle: 'solid',
                  borderLeftColor: item.price_change > 0 ? Colors.$redColor : Colors.$greenColor,
                }}
                key={i}
                onPress={() => (this.props.navigation.navigate('Report', { code: item.code }))}
                title={
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
                }
                hideChevron
                subtitle={
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
                }
                subtitleContainerStyle={{ paddingTop: 3, paddingBottom: 2 }}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

export default StockCard;
