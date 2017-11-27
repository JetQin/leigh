import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.$blackBlueColor,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
  },
  redBorder: {
    borderLeftWidth: 5,
    borderStyle: 'solid',
    borderLeftColor: Colors.$redColor,
  },
  greenBorder: {
    borderLeftWidth: 5,
    borderStyle: 'solid',
    borderLeftColor: Colors.$redColor,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  headerLeft: {
    flex: 0.5,
  },
  headerCenter: {
    flex: 0.2,
  },
  headerRight: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'montserrat',
    color: Colors.$black,
    backgroundColor: 'transparent',
  },
  headerRedText: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'montserrat',
    color: Colors.$redColor,
    backgroundColor: 'transparent',
  },
  headerGreenText: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'montserrat',
    color: Colors.$greenColor,
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
  },
  footerLeft: {
    flex: 0.5,
  },
  footerCenter: {
    flex: 0.2,
  },
  footerRight: {
    flex: 0.3,
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'montserrat',
    color: Colors.$black,
    backgroundColor: 'transparent',
  },
  footerRedText: {
    marginLeft: 2,
    fontSize: 18,
    fontFamily: 'montserrat',
    color: Colors.$redColor,
    backgroundColor: 'transparent',
  },
  footerGreenText: {
    marginLeft: 2,
    fontSize: 18,
    fontFamily: 'montserrat',
    color: Colors.$greenColor,
    backgroundColor: 'transparent',
  },
  icon: {
    marginLeft: 20,
  },
  separator: {
    flex: 1,
    height: 3,
    backgroundColor: Colors.$blackBlueColor,
  },

});

export default styles;
