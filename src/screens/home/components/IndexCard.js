import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Card from './Card';
import styles from './styles/IndexCard';

class IndexCard extends Component {
  render() {
    return (
      <ScrollView style={styles.cardContainer} horizontal pagingEnabled alwaysBounceHorizontal showsHorizontalScrollIndicator={false} >
        { this.props.indexs.map((index, i) => (
          <View key={i} style={styles.itemContainer}>
            <Card index={index} />
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default IndexCard;
