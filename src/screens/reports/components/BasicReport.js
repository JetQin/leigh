import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import styles from './styles/BasicReport';
import Colors from '../../../../constants/Colors';

class BasicReport extends Component {
  constructor(props) {
    super(props);
    this.fetchBasicInfo = this.fetchBasicInfo.bind(this);
    this.state = {
      priceInfo: {
        price: 769.42,
        price_change: 0.91,
        p_change: 6.93,
        open: 770.37,
        close: 770.37,
        max: 770.37,
        min: 770.37,
        weekMax: 778,
        weekMin: 760,
      },
      basicInfo: {
        breifInfo: '公司成立于1984年,1988年进入房地产行业,1991年成为深圳证券交易所第二家上市公司。经过二十多年的发展,成为国内最大的住宅开发企业,目前业务覆盖珠三角、长三角、环渤海三大城市经济圈以及中西部地区,共计53个大中城市。近三年来,年均住宅销售规模在6万套以上,2011年公司实现销售面积1075万平米,销售金额1215亿元,2012年销售额超过1400亿。销售规模持续居全球同行业首位。万科企业股份有限公司是目前中国最大的专业住宅开发企业。2007年公司完成新开工面积776.7万平方米,竣工面积445.3万平方米,实现销售金额523.6亿元,结算收入351.8亿元,净利润48.4亿元,纳税53.2亿元。以理念奠基、视道德伦理重于商业利益,是万科的最大特色。2014年6月25日,本公司B股以介绍方式转换上市地在香港联交所(H股)上市。',
        industry: '房地产',
        company: '',
      },
      stockInfo: {
        turnoverVolume3M: 900,
        pettm: 23.90,
        floatShare: 34,
        eps: 23,
        basicEps: 20,
        highprice: 203,
        lowprice: 180,
        isin: 'ASFSD',
        ceo: 'Jackie',
        betaHS300: 12,
        employee: 3000,
      },
      stockShare: {
        holdSumChangeRate: 3,
        holdSumChange: 30,
        holdSum: 300,
        institutionHoldProp: 22,
        floatShare: 30,
        institutionHolding: 50,
      },
    };
  }

  componentDidMount() {
    this.fetchBasicInfo();
  }

  fetchBasicInfo() {
    console.log(this.fetchBasicInfo);
  }

  render() {
    return (
      <ScrollView style={styles.root} >
        <Card title='基本信息'>
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
              <Text style={styles.labelText}>{this.state.priceInfo.price_change}}%</Text>
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
          <Button title='解锁更多数据' backgroundColor={Colors.$blackBlueColor} textStyle={{ color: Colors.$whiteColor }} onPress={() => console.log('press')} />
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
    );
  }
}

export default BasicReport;
