import React, { Component } from 'react';
import { Content, List, ListItem, Text, Icon, Left, Body } from 'native-base';

class SidebarScreen extends Component {
  render() {
    return (
      <Content style={{ backgroundColor: '#FFFFFF' }}>
        <List>
          <ListItem icon >
            <Left>
              <Icon name="paper" />
            </Left>
            <Body >
              <Text>Passbook</Text>
            </Body>
          </ListItem>
          <ListItem icon >
            <Left>
              <Icon name="person" />
            </Left>
            <Body>
              <Text>Profile</Text>
            </Body>
          </ListItem>
          <ListItem icon >
            <Left>
              <Icon name="settings" />
            </Left>
            <Body>
              <Text>Settings</Text>
            </Body>
          </ListItem>
        </List>

      </Content>
    );
  }
}

export default SidebarScreen;
