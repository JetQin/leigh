import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon, Button } from 'native-base';
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
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: Colors.$redColor },
    headerLeft: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image source={require('../../../assets/imgs/logo.png')} style={styles.logo} />
        <Text style={styles.title}>新历财经</Text>
      </View>
    ),
    headerRight: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon name='md-search' style={{ fontSize: 30, color: Colors.$whiteColor }} />
        </Button>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <MaterialCommunityIcons name='share' style={{ fontSize: 30, color: Colors.$whiteColor }} />
        </Button>
      </View>
    ),
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name="more" size={25} color={tintColor} />
    ),
  });

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
