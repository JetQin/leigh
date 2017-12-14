import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  layout: {
    flex: 1,
  },
  top: {
    flex: 0.5,
    // width: Dimensions.get('window').width,
    // height: (Dimensions.get('window').width - 100) / 2,
    // borderBottomLeftRadius: Dimensions.get('window').width / 2,
    // borderBottomRightRadius: Dimensions.get('window').width / 2,
    backgroundColor: '#F1F8FF',
  },
  bottom: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    left: 0,
  },
  // 头像
  avatarContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    // paddingLeft: (Dimensions.get('window').width / 2) - 100,
  },
  // 设置
  settingContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingBtn: {
    position: 'absolute',
    right: 5,
    justifyContent: 'center',
  },
  // 我的收藏
  myCollectContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D2D4D7',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  headerTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'black',
    left: 15,
    fontSize: 18,
    paddingTop: 12,
    fontFamily: 'montserrat',
  },
  title: {
    fontSize: 16,
    fontFamily: 'montserratBold',
  },
  labelText: {
    fontSize: 14,
    fontFamily: 'montserratBold',
  },
  label: {
    fontSize: 12,
    fontFamily: 'montserrat',
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

});

export default styles;
