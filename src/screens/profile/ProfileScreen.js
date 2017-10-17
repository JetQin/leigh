import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Badge, List, ListItem } from 'react-native-elements';
import { Container, Button, Segment, Content } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';

import Fonts from '../../../constants/Fonts';
import styled from 'styled-components/native';
import styles from './styles/ProfileScreen';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    date: '2017/09/09',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    date: '2017/09/09',
  },
];

const PassBtn = styled.TouchableOpacity`
  justifyContent: center;
  alignItems: center;
  flex: 0.5;
  flexDirection: row;
  backgroundColor: ${({ color }) => color};
`;
class ProfileScreen extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.$redColor },
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons name="account-circle" size={25} color={tintColor} />
    ),
  }

  constructor(props) {
    super(props);
    this.state = {
      first: true,
      second: false,
      last: false,
      items: list,
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeAvatar() {
    console.log('change avatar');
  }

  changeTab(e, tabName) {
    const data = {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      date: '2017/09/09',
    };
    if (tabName === 'first') {
      const active = true;
      this.setState((state) => ({ first: active, second: !active, last: !active, items: state.items.concat(data) }));
    }
    if (tabName === 'second') {
      const active = true;
      this.setState({ first: !active, second: active, last: !active });
    }
    if (tabName === 'last') {
      const active = true;
      this.setState({ first: !active, second: !active, last: active });
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.avatarContainer}>
          <Avatar
            large
            rounded
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
            onPress={this.changeAvatar}
            activeOpacity={0.7}
          />
          <View style={styles.settingContainer}>
            <Button color={Colors.$passButtonColor} title='Change Icon' />
            <Text style={Fonts.buttonAuth}>wordpress</Text>
          </View>
        </View>
        <View style={styles.followContainer}>
          <PassBtn color={Colors.$passButtonColor}>
            <Text style={Fonts.buttonAuth}>已通过版本</Text>
            <Badge value={3} textStyle={{ color: Colors.$whiteColor }} containerStyle={{ backgroundColor: Colors.$redColor }} />
          </PassBtn>
          <PassBtn color={Colors.$notpassButtonColor}>
            <Text style={Fonts.buttonAuth}>未通过版本</Text>
            <Badge value={3} textStyle={{ color: Colors.$whiteColor }} containerStyle={{ backgroundColor: Colors.$redColor }} />
          </PassBtn>
        </View>
        <View style={styles.paneContainer}>
          <Container>
            <Segment style={{ backgroundColor: Colors.$blackBlueColor }}>
              <Button first active={this.state.first} onPress={(e) => this.changeTab(e, 'first')}><Text style={Fonts.buttonAuth}>已通过</Text></Button>
              <Button second active={this.state.second} onPress={(e) => this.changeTab(e, 'second')}><Text style={Fonts.buttonAuth}>待通过</Text></Button>
              <Button last active={this.state.last} onPress={(e) => this.changeTab(e, 'last')}><Text style={Fonts.buttonAuth}>未通过</Text></Button>
            </Segment>
            <Content padder>
              <List containerStyle={{ marginBottom: 20 }}>
                {
                  this.state.items.map((l, i) => (
                    <ListItem
                      key={i}
                      title={l.name}
                      subtitle={l.subtitle}
                      rightTitle={l.date}
                    />
                  ))
                }
              </List>
            </Content>
          </Container>
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
