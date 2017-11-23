import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '$blackBlueColor',
  },
  avatar: {
    flex: 4,
    marginTop: 75,
  },
  titleContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    top: '2%',
  },
  title: {
    fontFamily: 'montserratBold',
    position: 'absolute',
    color: '$whiteColor',
    top: '2%',
  },
  signinBtn: {
    top: '1%',
    paddingTop: 10,
  },
  bottom: {
    top: 20,
  },
  inputStyle: {
    borderRadius: 3,
    margin: '2%',
    marginLeft: '2%',
  }, 
  formTitle: {
    flexDirection: 'row',
    marginTop: '4%',
    marginLeft: '2%',
  },
  buttonStyle: {   
    width: '91%',
    justifyContent: 'center',
    backgroundColor: '#6A97BE',
  },
  flexContainer: {
    flexDirection: 'row',
    marginLeft: '2%',
  },
  cell: {
    flex: 1, 
    marginTop: '4%',  
  },
  smallBtn: {
    justifyContent: 'center',
    marginLeft: '10%',
  },
  myColor: {
    color: '#6A97BE',
  },
  logo: {
    top: 15,
    left: 10,
    width: 20,
    height: 20,
  },
  titleText: {
    color: '$navigationHeaderTextColor',
    left: 15,
    fontSize: 18,
    paddingTop: 12,
    fontFamily: 'montserrat',
    fontWeight: 'bold',
  },
});

export default styles;
