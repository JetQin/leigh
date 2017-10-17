import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import styles from './styles/NewsCard';

class NewsCard extends Component {
  render() {
    return (
      <ScrollView>
        <Card title='HELLO WORLD'>
          <Image source={{ uri: 'http://leigh365.com/wp-content/uploads/2017/08/20160420105218349-e1503196934613.jpg' }} />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button icon={{ name: 'code' }} style={styles.button} title='VIEW NOW' />
        </Card>
        <Card title='HELLO WORLD'>
          <Image source={{ uri: 'http://leigh365.com/wp-content/uploads/2017/08/20160420105218349-e1503196934613.jpg' }} />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button icon={{ name: 'code' }} style={styles.button} title='VIEW NOW' />
        </Card>
        <Card title='HELLO WORLD'>
          <Image source={{ uri: 'http://leigh365.com/wp-content/uploads/2017/08/20160420105218349-e1503196934613.jpg' }} />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button icon={{ name: 'code' }} style={styles.button} title='VIEW NOW' />
        </Card>
        <Card title='HELLO WORLD'>
          <Image source={{ uri: 'http://leigh365.com/wp-content/uploads/2017/08/20160420105218349-e1503196934613.jpg' }} />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button icon={{ name: 'code' }} style={styles.button} title='VIEW NOW' />
        </Card>
        <Card title='HELLO WORLD'>
          <Image source={{ uri: 'http://leigh365.com/wp-content/uploads/2017/08/20160420105218349-e1503196934613.jpg' }} />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button icon={{ name: 'code' }} style={styles.button} title='VIEW NOW' />
        </Card>
      </ScrollView>
    );
  }
}

export default NewsCard;
