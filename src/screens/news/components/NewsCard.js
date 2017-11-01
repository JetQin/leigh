import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import { Card, Button, Text, List, ListItem } from 'react-native-elements';
import styles from './styles/NewsCard';

class NewsCard extends Component {

  constructor(props) {
    super(props);
    this.scrollLoad = this.scrollLoad.bind(this);
  }

  scrollLoad() {
    this.props.scroll();
  }

  render() {
    const listItems = this.props.news.map((l, i) => (
      <ListItem
        key={i}
        title={l.name}
        subtitle={l.date}
        rightTitle={l.author}
      />
    ));
    return (
      <ScrollView onScroll={this.scrollLoad}>
        <List>
          { listItems }
        </List>
      </ScrollView>
    );
  }
}

export default NewsCard;
