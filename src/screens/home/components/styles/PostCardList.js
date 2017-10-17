import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    backgroundColor: Colors.$blackBlueColor,
  },
  header: {
    backgroundColor: '$whiteColor',
    color: '$whiteColor',
  },
  body: {
    backgroundColor: '$blackBlueColor',
    color: '$whiteColor',
  },
  footer: {
    backgroundColor: '$whiteColor',
  },

});

export default styles;
