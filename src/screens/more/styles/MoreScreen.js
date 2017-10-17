import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.$blackBlueColor,
  },
  aboutContainer: {
    flex: 0.4,
  },
  subscribeContainer: {
    flex: 0.4,
  },
  descriptionContainer: {
    flex: 0.1,

  },
  description: {
    fontFamily: 'montserratBold',
    position: 'absolute',
    color: '$whiteColor',
    left: '2%',
  },
});

export default styles;
