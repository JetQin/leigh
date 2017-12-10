import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  logo: {
    top: 15,
    left: 10,
    width: 20,
    height: 20,
  },
  titleText: {
    left: 15,
    fontSize: 18,
    paddingTop: 12,
    fontFamily: 'montserrat',
    fontWeight: 'bold',
  },
  stockContainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  searchInput: {
    borderRadius: 20, 
    margin: '2%', 
    marginLeft: '2%', 
    padding: '1%', 
    height: 30, 
    borderWidth: 1, 
    borderColor: '#ccc',
    width: '85%',
    backgroundColor: '#EEEEEE', 
  },
  searchBar: {
    width: '92%', 
    flexDirection: 'row', 
    marginLeft: '2%', 
    alignItems: 'center', 
    position: 'relative' 
  },
  closeBtn: {
    position: 'absolute', 
    right: '1%', 
    top: '18%', 
    width: 30, 
    height: 30, 
    borderRadius: 15, 
    backgroundColor: '#EFF8FF'
  },
  closeIcon: {
    fontSize: 20, 
    position: 'absolute', 
    left: '18%', 
    color: '$navigationHeaderTextColor',
  }

});

export default styles;
