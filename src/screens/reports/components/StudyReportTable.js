import React, { Component } from 'react';
import { Tabs, Tab, Card, CardItem, Text } from 'native-base';
import { Icon, List, ListItem } from 'react-native-elements';
import { View, Alert } from 'react-native';

import { ReportApi } from '../../../../constants/reportApi';
import styles from './styles/StudyReportTable';

const reportApi = new ReportApi();
class StudyReportTable extends Component {
  static defaultProps = {
    reportApi,
  }

  constructor(props) {
    super(props);
    this.getAuthor = this.getAuthor.bind(this);
    this.state = { author: '' };
  }

  async getAuthor(name) {
    const authorInfo = await this.props.reportApi.fetchAnalystName(name);
    console.log(authorInfo);
    let details = '姓名:'.concat(name).concat('\r\n');
    details = details.concat('性别:').concat(authorInfo.sex === null ? '--' : authorInfo.sex).concat('\r\n');
    details = details.concat('学历:').concat(authorInfo.ms === null ? '--' : authorInfo.ms).concat('\r\n');
    details = details.concat('奖项:').concat(authorInfo.award === null ? '--' : authorInfo.award).concat('\r\n');
    Alert.alert(
      '分析员信息',
      details,
      [
        { text: '确定' },
      ],
      { cancelable: false }
    );
  }

  getRatingBody() {
    let ratingBody = <View />;
    if (this.props.rating && this.props.rating.length > 0) {
      ratingBody = this.props.rating.map((item, i) => (
        <ListItem
          key={i}
          hideChevron
          title={
            <View style={styles.row}>
              <View style={styles.column}><Text>{item.orgName}</Text></View>
              <View style={styles.column}><Text>{item.currentRating}</Text></View>
              <View style={styles.column}><Text>{item.lastRating}</Text></View>
              <View style={styles.column}><Text>{item.goalPrice === null ? '--' : parseFloat(item.goalPrice).toFixed(2)}</Text></View>
            </View>
          }
        />
      ));
    }
    return ratingBody;
  }

  getComment() {
    let commentBody = <View />;
    if (this.props.comment && this.props.comment.length > 0) {
      commentBody = this.props.comment.map((item, i) => (
        <ListItem
          key={i}
          hideChevron
          title={
            <View style={styles.row}>
              <View style={styles.column}>
                <Text onPress={() => this.getAuthor(item.author)}>
                  {item.author === '' ? '--' : item.author}
                </Text>
              </View>
              <View style={styles.column}><Text>{item.orgName}</Text></View>
              <View style={styles.column}><Text>{item.pubDate}</Text></View>
              <View style={styles.column}>
                <Icon
                  name='md-document'
                  type='ionicon'
                  onPress={() => (
                    Alert.alert('详细内容', item.conclusion,
                      [
                        { text: '确定' },
                      ],
                      { cancelable: false }
                    )
                  )}
                />
              </View>
            </View>
          }
        />
      ));
    }
    return commentBody;
  }

  render() {
    const ratingBody = this.getRatingBody();
    const comment = this.getComment();
    return (
      <View style={styles.root}>
        <Tabs>
          <Tab heading='目标价位'>
            <Card>
              <CardItem header>
                <View style={styles.column}><Text>所属机构</Text></View>
                <View style={styles.column}><Text>本期评级</Text></View>
                <View style={styles.column}><Text>上期评级</Text></View>
                <View style={styles.column}><Text>目标价位</Text></View>
              </CardItem>
              <List>
                {ratingBody}
              </List>
            </Card>
          </Tab>
          <Tab heading='分析报告'>
            <Card>
              <CardItem header>
                <View style={styles.column}><Text>分析员</Text></View>
                <View style={styles.column}><Text>名次</Text></View>
                <View style={styles.column}><Text>撰写日期</Text></View>
                <View style={styles.column}><Text>文章</Text></View>
              </CardItem>
              <List>
                {comment}
              </List>
            </Card>
          </Tab>
        </Tabs>
      </View>
    );
  }
}

export default StudyReportTable;
