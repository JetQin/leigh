import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';
import styles from './styles/MoreScreen';

const list = [
  {
    title: '官方网站',
    icon: 'web',
  },
  {
    title: '广告合作',
    icon: 'av-timer',
  },
  {
    title: '联系我们',
    icon: 'contact-mail',
  },
];

const sublist = [
  {
    title: 'iOS App 推送',
    icon: 'flight-takeoff',
    description: '49060订阅',
  },
  {
    title: 'Android App 推送',
    icon: 'flight-takeoff',
    description: '460订阅',
  },
  {
    title: '微信公众号',
    icon: 'flight-takeoff',
    description: '1060订阅',
  },
  {
    title: '邮件订阅',
    icon: 'flight-takeoff',
    description: '960订阅',
  },
];

class MoreScreen extends Component {
  static navigationOptions = {
    title: '关于',
    headerStyle: { backgroundColor: Colors.$redColor },
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name="more" size={25} color={tintColor} />
    ),
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.aboutContainer}>
          <List>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                />
              ))
            }
          </List>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            为何订阅？1: 去广告；2:解锁付费功能
          </Text>
        </View>
        <View style={styles.subscribeContainer}>
          <List>
            {
              sublist.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  rightTitle={item.description}
                />
              ))
            }
          </List>
        </View>
      </View>
    );
  }
}

export default MoreScreen;
