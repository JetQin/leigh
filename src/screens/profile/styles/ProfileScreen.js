import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  layout: {
    flex: 1,
  },
  top: {
    flex: 0.5,
  },
  bottom: {
    flex: 0.5,
  },
  // 头像
  avatarContainer: {
    backgroundColor: '#F1F8FF',
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2%',
  },
  // 设置
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: '4%',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  // 我的收藏
  myCollectContainer: {
    // height: '25%',
    flex: 0.3,
    backgroundColor: 'red',
    borderBottomLeftRadius: 800,
    borderBottomRightRadius: 800,
  },
  // 已收藏文章
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '15%',
    marginRight: '15%',
  },

  collectContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D2D4D7',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
  },

  collectText: {
    alignItems: 'center',
  },
  // 充值
  payContainer: {
    // height: '37%',
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },

  paneContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '10%',
  },

  paneText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#58A6F1',
  },

  moneyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '10%',
    // color: '#58A6F1',
  },
  moneyText: {
    width: '20%',
    justifyContent: 'center',
    backgroundColor: '#EEF2E4',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '20%',
    justifyContent: 'center',
    backgroundColor: '#6A97BE',
    alignItems: 'center',
    marginLeft: '40%',
  },
  logo: {
    top: 15,
    left: 10,
    width: 20,
    height: 20,
  },
  headerTitle: {
    color: '$navigationHeaderTextColor',
    left: 15,
    fontSize: 18,
    paddingTop: 12,
    fontFamily: 'montserrat',
  },

});

export default styles;
