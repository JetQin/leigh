import React, { Component } from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import { SwipeRow, Button } from 'native-base';
import { Icon, List, ListItem, Avatar } from 'react-native-elements';
import moment from 'moment';
import styles from './styles/NewsInfo';

export default class NewsInfo extends Component {
  constructor(props) {
    super(props);
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

  // deleteRow(secId, rowId, rowMap) {
  // rowMap[`${secId}${rowId}`].props.closeRow();
  // const newData = [...this.state.listViewData];
  // newData.splice(rowId, 1);
  // this.setState({ listViewData: newData });
  // }

  render() {
    if (!this.props.news) {
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
        <List >
          {
            this.props.news.map((item, i) => (
              <ListItem
                key={i}
                onPress={() => (this.props.navigation.navigate('ViewHtml', { uri: item.url }))}
                leftIcon={item.picUrl === '' ? <View style={styles.emptyView} /> : <Avatar medium source={{ uri: item.picUrl }} />}
                avatarContainerStyle={{ paddingLeft: 0, left: 0 }}
                title={item.name}
                titleStyle={{ paddingLeft: 10 }}
                hideChevron
                subtitle={
                  <SwipeRow
                    rightOpenValue={-80}
                    body={
                      <View style={styles.footer}>
                        <Text style={styles.footerText}>{moment(item.date, 'YYYY-MM-DD').startOf('day').fromNow()}</Text>
                        <Icon size={12} name='tags' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
                        <Text style={styles.footerText}>{item.category}</Text>
                        <Icon size={12} name='comments' type='font-awesome' color='#384259' iconStyle={styles.icon} />
                      </View>
                    }
                    right={
                      <Button danger onPress={() => alert('Trash')}>
                        <Text>删除</Text>
                      </Button>
                    }
                  />
                }
                subtitleContainerStyle={{ paddingLeft: 10, paddingTop: 8, paddingBottom: 5 }}
              />
            ))

          }
        </List>
      </ScrollView>
    );
  }
}
