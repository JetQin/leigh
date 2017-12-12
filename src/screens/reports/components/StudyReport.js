import React, { Component } from 'react';
import { ScrollView, View, Text, WebView, AsyncStorage } from 'react-native';
import { Card, Button } from 'react-native-elements';
import StudyReportTable from './StudyReportTable';
import styles from './styles/StudyReport';
import Colors from '../../../../constants/Colors';

class StudyReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_paid: false,
      code: '',
      basic: {
        buy: '--',
        hold: '--',
        sell: '--',
        total: '--',
      },
      chartData: [
        { name: '买入', desc: 'buy', value: 0 },
        { name: '持有', desc: 'hold', value: 0 },
        { name: '卖出', desc: 'sell', value: 0 },
      ],
      basic_rating: [],
      basic_comment: [],
    };
    this.update = this.update.bind(this);
  }

  async componentDidMount() {
    /**
     * 登录时判断此用户是否为付费用户，如果是存储该属性到本地isPaid=true
     */
    const isPaid = await AsyncStorage.getItem('@isPaid');
    this.setState({ is_paid: isPaid === undefined ? false : isPaid });
  }

  update() {
    this.setState({
      basic: this.props.data.basic,
      code: this.props.data.code,
      chartData: [
        { name: '买入', desc: 'buy', value: parseInt(this.props.data.basic.buy, 10) },
        { name: '持有', desc: 'hold', value: parseInt(this.props.data.basic.hold, 10) },
        { name: '卖出', desc: 'sell', value: parseInt(this.props.data.basic.sell, 10) },
      ],
      basic_rating: this.props.data.basic_rating,
      basic_comment: this.props.data.basic_comment,
    });
  }

  render() {
    let url = 'http://synebusiness.cn/study_report_chart.html?';
    url = url.concat('buy=').concat(this.state.basic.buy);
    url = url.concat('&hold=').concat(this.state.basic.hold);
    url = url.concat('&sell=').concat(this.state.basic.sell);

    const financialTableUrl = 'http://synebusiness.cn/study_report_table.html?code=';
    financialTableUrl.concat(this.state.code);
    return (
      <ScrollView style={styles.root} >
        <Card title='基本信息'>
          <View style={styles.chart} >
            <WebView
              style={styles.chartContainer}
              source={{ uri: url }}
              scrollEnabled={false}
              automaticallyAdjustContentInsets
              contentInset={{ top: 0, left: 0 }}
            />
          </View>
          <View style={styles.lineContainer}>
            <View style={styles.columnContainer}>
              <View style={styles.rowContainer}>
                <Button title='买入' backgroundColor={Colors.$redColor} color={Colors.$whiteColor} />
                <Text style={styles.label}>基于{this.state.basic.total}份评级报告</Text>
              </View>
            </View>
            <View style={styles.columnContainer}>
              <View style={styles.rowContainer}>
                <Text style={styles.labelRedText}>{this.state.basic.buy}-买入</Text>
                <Text style={styles.labelGrayText}>{this.state.basic.hold}-持有</Text>
                <Text style={styles.labelGreenText}>{this.state.basic.sell}-卖出</Text>
              </View>
            </View>
          </View>
        </Card>
        {
          !this.state.is_paid ?
            (<View>
              <Button
                title='解锁更多数据' backgroundColor={Colors.$blackBlueColor} textStyle={{ color: Colors.$whiteColor }}
                onPress={() => this.props.nav.navigate('Profile')}
              />
            </View>)

            :
            (<View style={styles.chart} >
              <StudyReportTable rating={this.state.basic_rating} comment={this.state.basic_comment} />
            </View>)
        }
      </ScrollView>
    );
  }
}

export default StudyReport;
