import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  chart: {
    width: 200,
    height: 200,
  },
  lineContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  columnContainer: {
    flex: 0.6,
    marginRight: 10,
  },
  rowContainer: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontFamily: 'montserratBold',
    color: Colors.$grayColor,
    textAlign: 'center',
  },
  labelRedText: {
    paddingTop: 2,
    paddingLeft: 0,
    fontSize: 12,
    fontFamily: 'montserrat',
    color: Colors.$redColor,
    textAlign: 'right',
  },
  labelGreenText: {
    paddingTop: 2,
    paddingLeft: 0,
    fontSize: 12,
    fontFamily: 'montserrat',
    color: Colors.$greenColor,
    textAlign: 'right',
  },
  labelGrayText: {
    paddingTop: 2,
    paddingLeft: 0,
    fontSize: 12,
    fontFamily: 'montserrat',
    color: Colors.$grayColor,
    textAlign: 'right',
  },

});

export default styles;
