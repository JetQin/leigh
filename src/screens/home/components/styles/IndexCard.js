import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 1,
    width: 105,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'montserratBold',
    color: Colors.$blueThemeColor,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  valueContainer: {
    top: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 20,
    fontFamily: 'montserrat',
    color: Colors.$black,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerRedIcon: {
    color: Colors.$redColor,
  },
  footerRedText: {
    fontSize: 12,
    fontFamily: 'montserrat',
    color: Colors.$redColor,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  footerGreenText: {
    fontSize: 12,
    fontFamily: 'montserrat',
    color: Colors.$greenColor,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },

});

export default styles;
