import React, { Component } from 'react';
import { View } from 'react-native';
import { ScrollableTab, Tabs, Tab } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';
import { BasicReport, StudyReport, FinancialReport } from './components';

class ReportScreen extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.$redColor },
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons name="notifications" size={25} color={tintColor} />
    ),
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tabs renderTabBar={() => <ScrollableTab />} >
          <Tab heading='基本信息'>
            <BasicReport />
          </Tab>
          <Tab heading='研报'>
            <StudyReport />
          </Tab>
          <Tab heading='财报'>
            <FinancialReport />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

export default ReportScreen;
