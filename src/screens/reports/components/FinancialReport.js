import React, { Component } from 'react';
import { ScrollView, View, WebView, AsyncStorage, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import styles from './styles/FinancialReport';
import Colors from '../../../../constants/Colors';
import { LoadingScreen } from '../../../commons/';

class FinancialReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_paid: false,
      code: '',
      loading: false,
      revenue: [[]],
      profit: [],
      income: [],
      revenueAll: [],
      profitAll: [],
      incomeAll: [],
      revenueTable: {
        operatingRevenueTTM: '--',
        ebitda: '--',
        netProfitTTM: '--',
        incomeRatioTTM: '--',
        epsTTM: '--',
        dividendRatio: '--',
      },
      predictionTable: {
        opIncomeAvg: '--',
        EVToEBITDA: '--',
        ROAAvg: '--',
        EBITDAToTLiability: '--',
        ROEAvg: '--',
      },
      liabilityTable: {
        performanceTotalMV: '--',
        totalLiability: '--',
        totalCurrentLiability: '--',
        enterpriseValue: '--',
      },
      cashTable: {
        netCashFlowTTM: '--',
        freeCashFlow: '--',
      },
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
      code: this.props.code,
      loading: true,
      revenue: this.props.data.revenue,
      profit: this.props.data.profit,
      income: this.props.data.income,
      revenueAll: this.props.data.revenueAll,
      profitAll: this.props.data.profitAll,
      incomeAll: this.props.data.incomeAll,
      revenueTable: this.props.data.revenueTable,
      predictionTable: this.props.data.predictionTable,
      liabilityTable: this.props.data.liabilityTable,
      cashTable: this.props.data.cashTable,
    });
  }

  render() {
    if (!this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <ScrollView style={styles.root}>
        <View style={{ width: 500, height: 750 }}>
          <WebView
            source={{ uri: 'http://synebusiness.cn/financial_report_chart.html?code='.concat(this.state.code) }}
            scrollEnabled={false}
            automaticallyAdjustContentInsets
            contentInset={{ top: 0, left: 0 }}
          />
        </View>
        {
          !this.state.is_paid ?
            (<View>
              <Button
                title='解锁更多数据'
                backgroundColor={Colors.$blackBlueColor}
                textStyle={{ color: Colors.$whiteColor }}
                onPress={() => this.props.nav.navigate('Profile')}
              />
            </View>)
            :
            (
              <View>
                <Card title='损益表'>
                  <View style={styles.lineContainer}>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>营业收入(TM):</Text>
                      <Text style={styles.labelText}>{this.state.revenueTable.operatingRevenueTTM}</Text>
                    </View>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>息税折旧摊销前利润(EBITDA):</Text>
                      <Text style={styles.labelText}>{this.state.revenueTable.ebitda}</Text>
                    </View>
                  </View>
                  <View style={styles.lineContainer}>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>净利润(TTM):</Text>
                      <Text style={styles.labelText}>{this.state.revenueTable.netProfitTTM}</Text>
                    </View>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>销售毛利率(TTM):</Text>
                      <Text style={styles.labelText}>{this.state.revenueTable.incomeRatioTTM}</Text>
                    </View>
                  </View>
                  <View style={styles.lineContainer}>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>每股收益TTM(元/股):</Text>
                      <Text style={styles.labelText}>{this.state.revenueTable.epsTTM}</Text>
                    </View>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>股息率:</Text>
                      <Text style={styles.labelText}>{this.state.revenueTable.dividendRatio}</Text>
                    </View>
                  </View>
                </Card>
                <Card title='财物预期'>
                  <View style={styles.lineContainer}>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>营业收入预期(万元):</Text>
                      <Text style={styles.labelText}>{this.state.predictionTable.opIncomeAvg}</Text>
                    </View>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>EV/EBITDA:</Text>
                      <Text style={styles.labelText}>{this.state.predictionTable.EVToEBITDA}</Text>
                    </View>
                  </View>
                  <View style={styles.lineContainer}>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>总资产收益率预期(%):</Text>
                      <Text style={styles.labelText}>{this.state.predictionTable.ROAAvg}</Text>
                    </View>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>息税折旧摊前利润/负债合计:</Text>
                      <Text style={styles.labelText}>{this.state.predictionTable.EBITDAToTLiability}</Text>
                    </View>
                  </View>
                  <View style={styles.lineContainer}>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>净资产收益率预期(%):</Text>
                      <Text style={styles.labelText}>{this.state.predictionTable.ROEAvg}</Text>
                    </View>
                  </View>
                </Card>
                <Card title='资产负债表'>
                  <View style={styles.lineContainer}>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>总市值:</Text>
                      <Text style={styles.labelText}>{this.state.liabilityTable.performanceTotalMV}</Text>
                    </View>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>负债合计:</Text>
                      <Text style={styles.labelText}>{this.state.liabilityTable.totalLiability}</Text>
                    </View>
                  </View>
                  <View style={styles.lineContainer}>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>流动负债合计:</Text>
                      <Text style={styles.labelText}>{this.state.liabilityTable.totalCurrentLiability}</Text>
                    </View>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>企业价值(EV)(元):</Text>
                      <Text style={styles.labelText}>{this.state.liabilityTable.enterpriseValue}</Text>
                    </View>
                  </View>
                </Card>
                <Card title='现金流表'>
                  <View style={styles.lineContainer}>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>现金流量(TTM):</Text>
                      <Text style={styles.labelText}>{this.state.cashTable.netCashFlowTTM}</Text>
                    </View>
                    <View style={styles.columnContainer}>
                      <Text style={styles.label}>自由现金流量(元):</Text>
                      <Text style={styles.labelText}>{this.state.cashTable.freeCashFlow}</Text>
                    </View>
                  </View>
                </Card>
              </View>)
        }
      </ScrollView>
    );
  }
}

export default FinancialReport;
