import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  searchContainer: {
    flex: 0.1,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
  },
  searchTool: {
    flex: 0.9,
  },
  searchBtnContainer: {
    flex: 0.1,
  },
  stockContainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
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
  holderContainer: {
    flex: 1,
  },

});

export default styles;
