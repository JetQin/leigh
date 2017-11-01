import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, List } from 'react-native-elements';
import styles from './styles/StockCard';

class StockCard extends Component {
  render() {
    // const stock = {
    //   companyCode: 'GOOG',
    //   companyName: 'alphabet',
    //   price: 1017.11,
    //   change: -2.16,
    //   percent: '2.16%',
    // };
    const stock = this.props.stock;

    return (
      <View style={styles.root} >
        <View style={styles.titleContainer}>
          <View style={styles.companyCodeContainer}>
            <Text style={styles.companyCode}>{ stock.code }</Text>
          </View>
          <View style={styles.companyNameContainer}>
            <Text style={styles.companyName}>{ stock.name }</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price} >{ stock.open }</Text>
          </View>
          <View style={styles.changeContainer}>
            <Text style={styles.change}>{ stock.p_change }</Text>
          </View>
          <View style={styles.percentContainer}>
            <Text style={styles.percent}>{stock.price_change}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default StockCard;
