import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height * 0.5;

const styles = EStyleSheet.create({
  root: {
    backgroundColor: Colors.$whiteColor,
    paddingTop: 5,
    top: 5,
  },
  subtitleView: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: 'montserratBold',
    color: Colors.$black,
  },
  companyName: {
    fontSize: 8,
    fontFamily: 'montserratBold',
    color: Colors.$black,
  },
  shares: {
    marginTop: 0,
    marginLeft: 60,
    fontSize: 12,
    fontFamily: 'montserrat',
    color: Colors.$black,
  },
  date: {
    fontSize: 6,
    fontFamily: 'montserrat',
    color: Colors.$black,
  },
});

export default styles;
