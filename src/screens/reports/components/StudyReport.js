import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Pie } from 'react-native-pathjs-charts';
import styles from './styles/StudyReport';
import Colors from '../../../../constants/Colors';

class StudyReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: {
        buy: 28,
        hold: 2,
        sell: 4,
        total: 34,
      },
    };
  }

  render() {
    const data = [{
      name: '买入',
      desc: 'buy',
      value: 28,
    }, {
      name: '持有',
      desc: 'hold',
      value: 2,
    }, {
      name: '卖出',
      desc: 'sell',
      value: 4,
    }];

    const options = {
      margin: {
        top: 0,
        left: 0,
        right: 20,
        bottom: 20,
      },
      width: 120,
      height: 120,
      color: [Colors.$redColor, Colors.$grayColor, Colors.$greenColor],
      r: 30,
      R: 60,
      legendPosition: 'topLeft',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3,
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        color: Colors.$blackBlueColor,
      },
    };

    return (
      <ScrollView style={styles.root} >
        <Card title='基本信息'>
          <View style={styles.lineContainer}>
            <View style={styles.columnContainer} >
              <Pie
                data={data}
                options={options}
                accessorKey="value"
              />
            </View>
            <View style={styles.columnContainer}>
              <View style={styles.rowContainer}>
                <Button title='买入' backgroundColor={Colors.$redColor} color={Colors.$whiteColor} />
                <Text style={styles.label}>基于{this.state.basic.total}份评级报告</Text>
                <View style={styles.columnContainer}>
                  <Text style={styles.labelRedText}>{this.state.basic.buy}-买入</Text>
                  <Text style={styles.labelGrayText}>{this.state.basic.hold}-持有</Text>
                  <Text style={styles.labelGreenText}>{this.state.basic.sell}-卖出</Text>
                </View>
              </View>
            </View>
          </View>
        </Card>
        <View>
          <Button
            title='解锁更多数据' backgroundColor={Colors.$blackBlueColor} textStyle={{ color: Colors.$whiteColor }}
            onPress={() => console.log('press')}
          />
        </View>
      </ScrollView>
    );
  }
}

export default StudyReport;
