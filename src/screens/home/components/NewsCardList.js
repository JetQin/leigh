import React, { Component } from 'react';
import { View, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons/';
import { Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';

import Fonts from '../../../../constants/Fonts';
import styles from './styles/NewsCardList';

class NewsCardList extends Component {
  keyExtractor = (item, index) => item.newsId;

  renderItem = ({ item }) => (
    <Card style={{ flex: 0 }}>
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: item.img }} />
          <Body>
            <Text>{ item.content }</Text>
            <Text note>April 15, 2016</Text>
          </Body>
        </Left>
      </CardItem>
      <TouchableOpacity style={styles.contentContainer} onPress={() => (this.props.navigation.navigate('ViewHtml', { uri: 'http://leigh365.com/%E8%85%BE%E8%AE%AF%E4%BA%AC%E4%B8%9C%E9%98%BF%E9%87%8C%E4%B8%8A%E5%8D%8A%E5%B9%B4%E8%82%A1%E4%BB%B7%E5%A4%A7%E6%B6%A8%E5%9D%87%E8%B6%8550-%E8%BF%9B%E5%85%A5%E8%B4%A2%E5%AF%8C500%E5%BC%BA/' }))}>
        <Image source={{ uri: item.img }} style={styles.image} />
      </TouchableOpacity>
      <CardItem>
        <Left>
          <Button transparent textStyle={{ color: '#87838B' }}>
            <Icon size={16} name='tags' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
            <Text style={styles.footerTitle}>{item.category}</Text>
            <MaterialCommunityIcons name='wechat' style={{ fontSize: 18, color: '#384259' }} />
            <Text style={styles.footerTitle}>{item.category}</Text>
            <Icon size={16} name='bookmark' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
            <Text />
            <Icon size={16} name='share' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
          </Button>
        </Left>
      </CardItem>
    </Card>
  );

  render() {
    return (
      <ScrollView>
        <FlatList
          data={this.props.news}
          keyExtractor={this.keyExtractor}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderItem={this.renderItem}
        />
      </ScrollView>
    );
  }
}

export default NewsCardList;

