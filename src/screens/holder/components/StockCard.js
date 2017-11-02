import React, { Component } from 'react';
import { ScrollView, FlatList, View, Text } from 'react-native';
import styles from './styles/StockCard';

class StockCard extends Component {
  keyExtractor = (item, index) => item.code;

  renderItem = ({ item }) => (
    <View style={styles.root} >
      <View style={styles.titleContainer}>
        <View style={styles.companyCodeContainer}>
          <Text style={styles.companyCode}>{ item.code }</Text>
        </View>
        <View style={styles.companyNameContainer}>
          <Text style={styles.companyName}>{ item.name }</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price} >{ item.open }</Text>
        </View>
        <View style={styles.changeContainer}>
          <Text style={styles.change}>{ item.p_change }</Text>
        </View>
        <View style={styles.percentContainer}>
          <Text style={styles.percent}>{item.price_change}</Text>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.props.stocks}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default StockCard;
