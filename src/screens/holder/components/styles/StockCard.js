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
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyCodeContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  companyCode: {
    fontSize: 16,
    fontFamily: 'montserratBold',
    color: Colors.$whiteColor,
  },
  companyNameContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  companyName: {
    fontSize: 12,
    fontFamily: 'montserratBold',
    color: Colors.$whiteColor,
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: 12,
    fontFamily: 'montserratBold',
    color: Colors.$redColor,
  },
  changeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  change: {
    fontSize: 12,
    fontFamily: 'montserratBold',
    color: Colors.$redColor,
  },
  percentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percent: {
    fontSize: 12,
    fontFamily: 'montserratBold',
    color: Colors.$redColor,
  },
  separator: {
    flex: 1,
    height: 10,
    backgroundColor: '$blackBlueColor',
  },

});

export default styles;
