import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { Container, Content, Button, List, Text } from 'native-base';

import { normalize, ListItem, Avatar, Icon } from 'react-native-elements';
import moment from 'moment';
import styles from './styles/NewsInfo';

const datas = [
  {
    id: 20998,
    name: '保监会举办2017年党务骨干培训班',
    url: 'http://synebusiness.cn/?p=20998',
    picUrl: '',
    category: '金融',
    date: '2017-11-15 09:05:33',
  },
  {
    id: 20992,
    name: '保监会：支持深度贫困地区打赢脱贫攻坚战',
    url: 'http://synebusiness.cn/?p=20992',
    picUrl: '',
    category: '金融',
    date: '2017-11-15 09:02:21',
  },
];
export default class NewsInfo extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
      refreshing: false,
      news: [],
    };
  }
  componentDidMount() {
    this.setState({ news: this.props.news });
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  renderRow(item) {
    return (
      <ListItem
        onPress={() => (this.props.navigation.navigate('ViewHtml', { uri: item.url }))}
        leftIcon={item.picUrl === '' ? <View style={styles.emptyView} /> : <Avatar medium source={{ uri: item.picUrl }} />}
        avatarContainerStyle={{ paddingLeft: 0, left: 0 }}
        title={
          <View>
            <Text style={{ fontSize: normalize(14), color: '#43484d' }}>{item.name}</Text>
            <View style={[styles.footer, { paddingTop: 8 }]}>
              <Text style={styles.footerText}>{moment(item.date, 'YYYY-MM-DD').startOf('day').fromNow()}</Text>
              <Icon size={12} name='tags' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
              <Text style={styles.footerText}>{item.category}</Text>
              <Icon size={12} name='comments' type='font-awesome' color='#384259' iconStyle={styles.icon} />
              <Icon size={12} name='bookmark' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
              <Icon size={12} name='share' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
            </View>
          </View>
        }
        titleStyle={{ paddingLeft: 10 }}
        hideChevron
      />
    );
  }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Content>
          <List
            dataSource={this.ds.cloneWithRows(this.state.news)}
            renderRow={data => this.renderRow(data)}
            renderLeftHiddenRow={data =>
              (<Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>)}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              (<Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Text>删除</Text>
              </Button>)}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </Content>
      </Container>
    );
  }
}
