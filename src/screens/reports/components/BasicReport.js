import React, { Component } from 'react';
import { ScrollView, View, WebView, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
// import { SmoothLine } from 'react-native-pathjs-charts';
import styles from './styles/BasicReport';
import Colors from '../../../../constants/Colors';

class BasicReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      priceInfo: {
        price: '--',
        price_change: '--',
        p_change: '--',
        open: '--',
        close: '--',
        max: '--',
        min: '--',
        weekMax: '--',
        weekMin: '--',
      },
      basicInfo: {
        breifInfo: '--',
        industry: '--',
        company: 'TEST',
      },
      stockInfo: {
        turnoverVolume3M: '--',
        pettm: '--',
        floatShare: '--',
        eps: '--',
        basicEps: '--',
        highprice: '--',
        lowprice: '--',
        isin: '--',
        ceo: '--',
        betaHS300: '--',
        employee: '--',
      },
      stockShare: {
        holdSumChangeRate: '--',
        holdSumChange: '--',
        holdSum: '--',
        institutionHoldProp: '--',
        floatShare: '--',
        institutionHolding: '--',
      },
    };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
  }

  update() {
    this.setState({
      priceInfo: this.props.data.price_info,
      basicInfo: this.props.data.basic_info,
      stockInfo: this.props.data.stock_info,
    });
  }

  render() {
    return (
      <View style={styles.root}>
        <ScrollView style={styles.root} >
          <Card title={this.state.basicInfo.company}>
            <WebView
              style={styles.chartContainer}
              scrollEnabled={false}
              automaticallyAdjustContentInsets
              source={{ uri: 'http://synebusiness.cn/basic_report_chart.html?code='.concat(this.state.code) }}
            />
            <View style={styles.lineContainer}>
              <View style={styles.narrowColumnContainer}>
                <Text style={styles.label}>现价:</Text>
                <Text style={styles.labelText}>{this.state.priceInfo.price}</Text>
              </View>
              <View style={styles.wideColumnContainer}>
                <Text style={styles.label}>变化:</Text>
                <Text style={styles.labelText}>{this.state.priceInfo.p_change}</Text>
              </View>
              <View style={styles.wideColumnContainer}>
                <Text style={styles.label}>变化百分比:</Text>
                <Text style={styles.labelText}>{this.state.priceInfo.price_change}%</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.narrowColumnContainer}>
                <Text style={styles.label}>今开:</Text>
                <Text style={styles.labelText}>{this.state.priceInfo.open}</Text>
              </View>
              <View style={styles.wideColumnContainer}>
                <Text style={styles.label}>昨收:</Text>
                <Text style={styles.labelText}>{this.state.priceInfo.close}</Text>
              </View>
              <View style={styles.wideColumnContainer}>
                <Text style={styles.label}>最高:</Text>
                <Text style={styles.labelText}>{this.state.priceInfo.max}</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.narrowColumnContainer}>
                <Text style={styles.label}>最低:</Text>
                <Text style={styles.labelText}>{this.state.priceInfo.min}</Text>
              </View>
              <View style={styles.wideColumnContainer}>
                <Text style={styles.label}>2周最高:</Text>
                <Text style={styles.labelText}>{this.state.priceInfo.weekMax}</Text>
              </View>
              <View style={styles.wideColumnContainer}>
                <Text style={styles.label}>2周最低:</Text>
                <Text style={styles.labelText}>{this.state.priceInfo.weekMin}</Text>
              </View>
            </View>
          </Card>
          <Card title='公司简介'>
            <Text style={styles.labelSimpleText}>{this.state.basicInfo.breifInfo}</Text>
          </Card>
          <Card title='所属行业'>
            <Text style={styles.labelSimpleText}>{this.state.basicInfo.industry}</Text>
          </Card>
          <View>
            <Button
              title='解锁更多数据'
              backgroundColor={Colors.$blackBlueColor}
              textStyle={{ color: Colors.$whiteColor }}
              onPress={() => console.log('press')}
            />
          </View>
          <Card title='付费内容'>
            <View style={styles.lineContainer}>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>三个月成交量(万股):</Text>
                <Text style={styles.labelText}>{this.state.stockInfo.turnoverVolume3M}</Text>
              </View>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>滚动市盈率:</Text>
                <Text style={styles.labelText}>{this.state.stockInfo.pettm}</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>流通股:</Text>
                <Text style={styles.labelText}>{this.state.stockInfo.floatShare}</Text>
              </View>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>季度每股收益率:</Text>
                <Text style={styles.labelText}>{this.state.stockInfo.eps}</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>52周最高价:</Text>
                <Text style={styles.labelText}>{this.state.stockInfo.highprice}</Text>
              </View>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>ISIN代码:</Text>
                <Text style={styles.labelText}>{this.state.stockInfo.isin}</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>CEO:</Text>
                <Text style={styles.labelText}>{this.state.stockInfo.ceo}</Text>
              </View>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>年度每股收益率:</Text>
                <Text style={styles.labelText}>{this.state.stockInfo.basicEps}</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>52周最低价:</Text>
                <Text style={styles.labelText}>{this.state.stockInfo.lowprice}</Text>
              </View>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>Beta值(相对沪深300，一年):</Text>
                <Text style={styles.labelText}>{this.state.stockInfo.betaHS300}</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>员工人数:</Text>
                <Text style={styles.labelText}>{this.state.stockInfo.employee}</Text>
              </View>
            </View>
          </Card>
          <Card title='持股情况'>
            <View style={styles.lineContainer}>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>增减幅度(%):</Text>
                <Text style={styles.labelText}>{this.state.stockShare.holdSumChangeRate}</Text>
              </View>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>持股数量增减(股):</Text>
                <Text style={styles.labelText}>{this.state.stockShare.holdSumChange}</Text>
              </View>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>持股数(股):</Text>
                <Text style={styles.labelText}>{this.state.stockShare.holdSum}</Text>
              </View>
            </View>
          </Card>
          <Card title='机构持股'>
            <View style={styles.lineContainer}>
              <View style={styles.narrowColumnContainer}>
                <Text style={styles.label}>机构持股比例合计(%):</Text>
              </View>
              <View style={styles.narrowColumnContainer}>
                <Text style={styles.label}>流通股份(股):</Text>
              </View>
              <View style={styles.narrowColumnContainer}>
                <Text style={styles.label}>机构持股数量(股):</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.narrowColumnContainer}>
                <Text style={styles.labelText}>{this.state.stockShare.institutionHoldProp}</Text>
              </View>
              <View style={styles.narrowColumnContainer}>
                <Text style={styles.labelText}>{this.state.stockShare.floatShare}</Text>
              </View>
              <View style={styles.narrowColumnContainer}>
                <Text style={styles.labelText}>{this.state.stockShare.institutionHolding}</Text>
              </View>
            </View>
          </Card>
          <Card title='大股东介绍'>
            <View style={styles.lineContainer}>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>大股东地位:</Text>
              </View>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>大股东名称:</Text>
              </View>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>更新时间:</Text>
              </View>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.label}>大股东持股比例:</Text>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.labelText}>{this.state.stockShare.institutionHoldProp}</Text>
              </View>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.labelText}>{this.state.stockShare.floatShare}</Text>
              </View>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.labelText}>{this.state.stockShare.institutionHolding}</Text>
              </View>
              <View style={styles.normalColumnContainer}>
                <Text style={styles.labelText}>{this.state.stockShare.institutionHolding}</Text>
              </View>
            </View>
          </Card>
        </ScrollView>
      </View>

    );
  }
}

export default BasicReport;
