import React, { Component } from 'react';
import { View, Text, Animated, Image, Easing } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';

import styles from './styles/LoginScreen';
import Fonts from '../../../constants/Fonts';

const FlexContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const BottomButtonWrapper = styled.View`
  flex: 0.2;
  flexDirection: row;
`;

const Button = styled.TouchableOpacity`
  justifyContent: center;
  alignItems: center;
  flex: 1;
  backgroundColor: ${({ color }) => color};
`;

class LoginScreen extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.$redColor },
  }

  state = {
    spinValue: new Animated.Value(0),
  };

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.state.spinValue.setValue(0);

    Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start((event) => {
      if (event.finished) {
        this.spin();
      }
    });
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <FlexContainer>
        <FlexContainer>
          <Text style={Fonts.authTitle}>新历财经</Text>
          <Animated.Image style={{ transform: [{ rotate: spin }] }} source={require('../../../assets/imgs/logo.png')} />
        </FlexContainer>
        <FlexContainer>
          <FlexContainer>
            <FlexContainer>
              <Text style={Fonts.authWelcomeTitle}>Welcome</Text>
            </FlexContainer>
            <FlexContainer>
              <Text style={Fonts.authWelcomeText}>Start surfing in Leigh</Text>
            </FlexContainer>
          </FlexContainer>
          <BottomButtonWrapper>
            <Button color={Colors.$signinButtonColor}>
              <Text style={Fonts.buttonAuth}>Sign-In</Text>
            </Button>
            <Button color={Colors.$signupButtonColor}>
              <Text style={Fonts.buttonAuth}>Sign-Up</Text>
            </Button>
          </BottomButtonWrapper>
        </FlexContainer>
      </FlexContainer>
    );
  }
}

export default LoginScreen;
