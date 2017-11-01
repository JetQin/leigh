import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height * 0.5;

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '$blackBlueColor',
  },
  topContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
  },
  title: {
    color: '$whiteColor',
    left: 15,
    fontSize: 18,
    paddingTop: 12,
    fontFamily: 'montserrat',
  },
  logo: {
    top: 15,
    left: 10,
    width: 20,
    height: 20,
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width,
  },
  text: {
    color: '$whiteColor',
    fontSize: 16,
    fontFamily: 'montserratBold',
    textAlign: 'center',
    paddingTop: 80,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: width,
    height: height,
    backgroundColor: 'transparent',
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },

});

export default styles;
