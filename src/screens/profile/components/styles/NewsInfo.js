import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 3,
  },
  emptyView: {
    width: 0,
    height: 0,
  },
  avatar: {
    flex: 0.2,
  },
  image: {
    width: 60,
    height: 60,
  },
  body: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontFamily: 'montserrat',
    color: Colors.$black,
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 0.2,
    flexDirection: 'row',
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
