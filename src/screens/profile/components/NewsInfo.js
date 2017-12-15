import React, { Component } from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import { SwipeRow, Button } from 'native-base';
import { Icon, List, ListItem, Avatar, normalize } from 'react-native-elements';
import moment from 'moment';
import styles from './styles/NewsInfo';

export default class NewsInfo extends Component {
  constructor(props) {
    super(props);
    this._onRefresh = this._onRefresh.bind(this);
    this._deleteNews = this._deleteNews.bind(this);
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
  _deleteNews(id) {
    this.props.delete(id);
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
        <List style={{ marginTop: 0 }}>
          {
            this.props.news.map((item, i) => (
              <ListItem
                style={{ padding: 0, margin: 0, borderBottomWidth: 1, borderBottomColor: '#BBB' }}
                key={i}
                onPress={() => (this.props.navigation.navigate('ViewHtml', { uri: item.url }))}
                title={
                  <SwipeRow
                    rightOpenValue={-80}
                    body={
                      <View style={{ flex: 1, marginLeft: 0, flexDirection: 'row' }}>
                        <View style={{ paddingRight: 10, flex: 0.13 }}>
                          {item.picUrl === '' ? <View style={styles.emptyView} /> : <Avatar medium source={{ uri: item.picUrl }} />}
                        </View>
                        <View style={{ flex: 0.87 }}>
                          <Text numberOfLines={1} style={{ fontSize: normalize(14), color: '#43484d' }}>{item.name}</Text>
                          <View style={[styles.footer, { paddingTop: 8  }]}>
                            <Text style={styles.footerText}>{moment(item.date, 'YYYY-MM-DD').startOf('day').fromNow()}</Text>
                            <Icon size={12} name='tags' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
                            <Text style={styles.footerText}>{item.category}</Text>
                            <Icon size={12} name='comments' type='font-awesome' color='#384259' iconStyle={styles.icon} />
                          </View>
                        </View>
                      </View>
                    }
                    right={
                      <Button danger onPress={() => this._deleteNews(item.id)}>
                        <Text>删除</Text>
                      </Button>
                    }
                  />
                }
                titleStyle={{ paddingLeft: 0 }}
                hideChevron
                // subtitle={
                 
                // }
                // subtitleContainerStyle={{ paddingLeft: 10, paddingTop: 0, paddingBottom: 0 }}
              />
            ))

          }
        </List>
      </ScrollView>
    );
  }
}
