import React, { Component } from 'react';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';
import { Avatar, List, ListItem } from 'react-native-elements';
import { Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import styles from './styles/NewsCard';

class NewsCard extends Component {
  constructor(props) {
    super(props);
    // this.scrollLoad = this.scrollLoad.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this.state = {
      refreshing: false,
      news: [],
    };
  }

  componentDidMount() {
    this.setState({ news: this.props.news });
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    this.props.scroll().then(() => {
      this.setState({ refreshing: false, news: this.props.news });
    });
  }

  keyExtractor = (item, index) => index;

  renderItem = ({ item }) => (
    <Card style={{ flex: 0 }}>
      <CardItem>
        <Left>
          { item.picUrl === '' ? <View /> : <Thumbnail square source={{ uri: item.picUrl }} />}
          <Body>
            <Text>{ item.name }</Text>
            <Text note>{ item.date }</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );

  render() {
    if (!this.props.news) {
      return (<View />);
    }
    // const listItems = this.state.news.map((l, i) => (
    //   <ListItem
    //     avatar={<Avatar
    //       medium
    //       source={{ uri: l.picUrl }}
    //     />}
    //     key={i}
    //     title={l.name}
    //     subtitle={l.date}
    //     rightTitle={l.author}
    //   />
    // ));
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        <FlatList
          data={this.state.news}
          keyExtractor={this.keyExtractor}
          //  renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderItem={this.renderItem}
        />
      </ScrollView>
    );
  }
}

export default NewsCard;
