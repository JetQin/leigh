import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  lineContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 5,
  },
  columnContainer: {
    flex: 0.33,
    flexDirection: 'row',
  },
  labelTitle: {
    fontSize: 14,
    fontFamily: 'montserratBold',
    color: Colors.$grayColor,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'montserratBold',
    color: Colors.$grayColor,
    textAlign: 'center',
  },
  labelText: {
    paddingLeft: 3,
    fontSize: 12,
    fontFamily: 'montserrat',
    color: Colors.$black,
    textAlign: 'center',
  },
  chart: {
    flex: 1,
  },
});

export default styles;
