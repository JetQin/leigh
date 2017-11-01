import React, { Component } from 'react';
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Card, List, ListItem } from 'react-native-elements';
import Fonts from '../../../../constants/Fonts';
import styles from './styles/HolderCard';

class HolderCard extends Component {
  render() {
    // let list = [
    //   {
    //     company_name: 'Amy Farha',
    //     holder_name: 'CLARK PAUL N',
    //     shares: '87,520',
    //     reportedDate: 'May 24, 2017',
    //   },
    //   {
    //     company_name: 'Amy Farha',
    //     holder_name: 'CLARK PAUL N',
    //     shares: '87,520',
    //     reportedDate: 'May 24, 2017',
    //   },
    //   {
    //     company_name: 'Amy Farha',
    //     holder_name: 'CLARK PAUL N',
    //     shares: '87,520',
    //     reportedDate: 'May 24, 2017',
    //   },
    // ];
    const list = this.props.holders;

    return (
      <ScrollView>
        <Card title='股东'>
          {
            <List containerStyle={{ marginBottom: 20 }}>
              {
                list.map((l, i) => (
                  <ListItem
                    key={i}
                    title={l.holder_name}
                    titleStyle={styles.title}
                    subtitle={l.company_name}
                    subtitleStyle={styles.companyName}
                    rightTitle={l.shares}
                    rightTitleStyle={styles.shares}
                    hideChevron
                  />
                ))
              }
            </List>
          }
        </Card>
      </ScrollView>
    );
  }
}

export default HolderCard;

