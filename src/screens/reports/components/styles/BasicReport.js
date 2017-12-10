import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  chart: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  chartContainer: {
    flex: 1,
    left: 0,
    top: 0,
    paddingLeft: 0,
    paddingTop: 0,
    width: 270,
    height: 300,
    backgroundColor: 'red',
  },
  lineContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 5,
  },
  narrowColumnContainer: {
    flex: 0.3,
    flexDirection: 'row',
  },
  wideColumnContainer: {
    flex: 0.35,
    flexDirection: 'row',
  },
  normalColumnContainer: {
    flex: 0.5,
    flexDirection: 'row',
  },
  labelTitle: {
    fontSize: 12,
    fontFamily: 'montserratBold',
    color: Colors.$grayColor,
    textAlign: 'center',
  },
  label: {
    fontSize: 12,
    fontFamily: 'montserratBold',
    color: Colors.$grayColor,
    textAlign: 'center',
  },
  labelRedText: {
    paddingTop: 2,
    paddingLeft: 3,
    fontSize: 10,
    fontFamily: 'montserrat',
    color: Colors.$redColor,
    textAlign: 'right',
  },
  labelGreenText: {
    paddingTop: 2,
    paddingLeft: 3,
    fontSize: 10,
    fontFamily: 'montserrat',
    color: Colors.$greenColor,
    textAlign: 'right',
  },
  labelText: {
    paddingTop: 2,
    paddingLeft: 3,
    fontSize: 10,
    fontFamily: 'montserrat',
    color: Colors.$black,
    textAlign: 'center',
  },
  labelSimpleText: {
    paddingTop: 2,
    paddingLeft: 3,
    fontSize: 10,
    fontFamily: 'montserrat',
    color: Colors.$black,
    textAlign: 'left',
  },
  chart: {
    flex: 1,
  },
});

export default styles;
