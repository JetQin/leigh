import React, { Component } from 'react';
import { ScrollView, View, Button, Text } from 'react-native';
// import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
import styles from './styles/BasicReport';

class BasicReport extends Component {
  render() {
    return (
      <ScrollView style={styles.root} >
        <Text style={styles.labelTitle}>基本信息</Text>
        <View style={styles.lineContainer}>
          <View style={styles.columnContainer}>
            <Text style={styles.label}>现价:</Text>
            <Text style={styles.labelText}>769.42</Text>
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.label}>变化:</Text>
            <Text style={styles.labelText}>6.93</Text>
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.label}>变化百分比:</Text>
            <Text style={styles.labelText}>0.91%</Text>
          </View>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.columnContainer}>
            <Text style={styles.label}>今开:</Text>
            <Text style={styles.labelText}>770.37</Text>
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.label}>昨收:</Text>
            <Text style={styles.labelText}>770.37</Text>
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.label}>今日最高:</Text>
            <Text style={styles.labelText}>770.37</Text>
          </View>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.columnContainer}>
            <Text style={styles.label}>今日最低:</Text>
            <Text style={styles.labelText}>770.37</Text>
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.label}>2周最高:</Text>
            <Text style={styles.labelText}>770.37</Text>
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.label}>2周最低:</Text>
            <Text style={styles.labelText}>770.37</Text>
          </View>
        </View>
        <View>
          <Text style={styles.label}>公司简介</Text>
          <Text style={styles.label}>所属行业</Text>
        </View>
        <View>
          <Button title='解锁更多数据' onPress={() => console.log('press')} />
        </View>
      </ScrollView>
    );
  }
}

export default BasicReport;
