import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },

  titleContainer: {
    flex: 0.2,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%',
  },

  title: {
    color: '$whiteColor',
    fontSize: 25,
    fontFamily: 'montserrat',
  },

  contentContainer: {
    flex: 1,
  },

  postCard: {
    height: 200,
    width: 165,
    marginHorizontal: '10%',
    backgroundColor: '#f73859',
  },

  postCardTopContainer: {
    flex: 1,
    position: 'relative',
  },

  postCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
  },

  postName: {
    fontFamily: 'montserratBold',
    position: 'absolute',
    color: '$whiteColor',
    top: '2%',
    left: '2.5%',
  },

  postContent: {
    fontSize: 12,
    fontFamily: 'montserrat',
  },

  postDate: {
    fontSize: 8,
    fontFamily: 'montserrat',
  },

});

export default styles;
