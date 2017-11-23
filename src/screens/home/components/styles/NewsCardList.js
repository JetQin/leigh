import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    backgroundColor: Colors.$whiteColor,
    paddingTop: 5,
    top: 5,
  },
  header: {
    backgroundColor: '$whiteColor',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
  },
  emptyView: {
    width: 0,
    height: 0,
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'montserrat',
    color: Colors.$black,
    backgroundColor: 'transparent',
  },
  separator: {
    flex: 1,
    height: 3,
    backgroundColor: Colors.$blackBlueColor,
  },

  icon: {
    marginLeft: 8,
    marginRight: 8,
  },
});

export default styles;
