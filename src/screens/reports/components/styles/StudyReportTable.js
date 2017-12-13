import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 3,
    // borderWidth: 1,
    // borderLeftWidth: 0,
    // borderLeftColor: '#000000',
    // borderRightWidth: 0,
    // borderRightColor: '#000000',
    // borderTopWidth: 1,
    // borderTopColor: '#000000',
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#000000',
  },
  column: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
