import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  lineContainer: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  columnContainer: {
    flex: 0.5,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    textAlign: 'left',
  },
  labelText: {
    paddingTop: 2,
    paddingLeft: 3,
    fontSize: 10,
    fontFamily: 'montserrat',
    color: Colors.$black,
    textAlign: 'right',
  },
});

export default styles;
