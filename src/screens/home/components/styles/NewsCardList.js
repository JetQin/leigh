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
  header: {
    backgroundColor: '$whiteColor',
  },
  separator: {
    flex: 1,
    height: 10,
    backgroundColor: '$blackBlueColor',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '$blackBlueColor',
    backgroundColor: '$whiteColor',
  },
  cardContainer: {
   width: width,
  },
  contentContainer: {
    flex: 1,
  },
  contentText: {
    marginBottom: 10,
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  footerTitle: {
    fontSize: 10,
    fontFamily: 'montserratBold',
    color: Colors.$black,
    backgroundColor: 'transparent',
  },
  icon: {
    left: 5,
    right: 3,
  },
});

export default styles;
