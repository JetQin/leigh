import { combineReducers } from 'redux';
import { HomeReducer, AuthReducer, SigninReducer, ProfileReducer } from '../screens';
//import navigation from '../routes/navigationReducer';

export default combineReducers({
  home: HomeReducer,
  user: AuthReducer,
  signin: SigninReducer,
  profile: ProfileReducer,
});
