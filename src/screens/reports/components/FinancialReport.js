import React, { Component } from 'react';
import { ScrollView, View, WebView, Text } from 'react-native';
// import { Bar } from 'react-native-pathjs-charts';
// import Svg from 'react-native-svg';
import { Constants, Svg } from 'expo';
import { VictoryTheme } from 'victory-core';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLegend } from 'victory-native';
import { Card, Button } from 'react-native-elements';
import styles from './styles/FinancialReport';
import Colors from '../../../../constants/Colors';

class FinancialReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  update() {
    this.setState({
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
    return (
      <ScrollView style={styles.root}>
        {/* <View style={styles.lineContainer}>
          <View style={styles.columnContainer}>
            <Text style={styles.labelTitle}>季度财报</Text>
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.labelTitle}>年度财报</Text>
          </View>
        </View> */}
        {/* <View style={styles.lineContainer}>
          <Text style={styles.labelTitle}>季度财报</Text>
        </View> */}
        <WebView
          source={{ uri: 'http://synebusiness.cn/chart.html' }}
          style={{ marginTop: 20, height: 300, width: 400 }}
        />
        <View style={styles.lineContainer}>
          <Text style={styles.labelTitle}>营业收入</Text>
          {/* <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={10}
            width={400}
            height={350}
            padding={{ left: 50, bottom: 80 }}
          >
            <VictoryBar
              style={{ data: { fill: '#c43a31', width: 20 } }}
              alignment="start"
              data={this.state.revenue}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              x='date'
              y={(d) => (d.value / 100000000)}
            />
            {/* <VictoryAxis label="净利润" /> */}
          {/* <VictoryAxis dependentAxis label="收入" /> */}
          {/* </VictoryChart>  */}
        </View>
        {/* <View style={styles.lineContainer}>
          <VictoryChart
            theme={VictoryTheme.material} domainPadding={20}
            padding={{ left: 30, bottom: 80 }}
            height={230}
            width={300}
          >
            <VictoryBar
              style={{
                data: { fill: '#c43a31' },
              }}
              data={this.state.profit}
              x='date'
              y={(d) => (d.value / 1000000)}
            />
            <VictoryAxis
              label="净利润"
              style={{
                axisLabel: { padding: 30 },
              }}
            />
          </VictoryChart>
        </View>
        <View style={styles.lineContainer}>
          <VictoryChart
            theme={VictoryTheme.material} domainPadding={20}
            padding={{ left: 30, bottom: 80 }}
            height={230}
            width={300}
          >
            <VictoryBar
              style={{
                data: { fill: '#c43a31' },
              }}
              data={this.state.income}
              x='date'
              y='value'
            />
            <VictoryAxis
              label="销售毛利率"
              style={{
                axisLabel: { padding: 30 },
              }}
            />
          </VictoryChart>
        </View>
        <View style={styles.lineContainer}>
          <Text style={styles.labelTitle}>年度财报</Text>
        </View>
        <View style={styles.lineContainer}>
          <VictoryChart
            theme={VictoryTheme.material} domainPadding={20}
            padding={{ left: 30, bottom: 80 }}
            height={230}
            width={300}
          >
            <VictoryBar
              style={{
                data: { fill: '#c43a31' },
              }}
              data={this.state.revenueAll}
              x='date'
              y={(d) => (d.value / 100000000)}
            />
            <VictoryAxis
              label="销售毛利率"
              style={{
                axisLabel: { padding: 30 },
              }}
            />
          </VictoryChart>
        </View>
        <View style={styles.lineContainer}>
          <VictoryChart
            theme={VictoryTheme.material} domainPadding={20}
            padding={{ left: 30, bottom: 80 }}
            height={230}
            width={300}
          >
            <VictoryBar
              style={{
                data: { fill: '#c43a31' },
              }}
              data={this.state.profitAll}
              x='date'
              y={(d) => (d.value / 100000000)}
            />
            <VictoryAxis
              label="销售毛利率"
              style={{
                axisLabel: { padding: 30 },
              }}
            />
          </VictoryChart>
        </View>
        <View style={styles.lineContainer}>
          <VictoryChart
            theme={VictoryTheme.material} domainPadding={20}
            padding={{ left: 30, bottom: 80 }}
            height={230}
            width={300}
          >
            <VictoryBar
              style={{
                data: { fill: '#c43a31' },
              }}
              data={this.state.incomeAll}
              x='date'
              y='value'
            />
            <VictoryAxis
              label="销售毛利率"
              style={{
                axisLabel: { padding: 30 },
              }}
            />
          </VictoryChart>
        </View> */}
        {/* <View>
          <Button
            title='解锁更多数据'
            backgroundColor={Colors.$blackBlueColor}
            textStyle={{ color: Colors.$whiteColor }}
            onPress={() => console.log('press')}
          />
        </View>
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
        </Card> */}
      </ScrollView>
    );
  }
}

export default FinancialReport;
