import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import registerReducer from './registerReducer';
import newsfeedReducer from './newsfeedReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	errors: errorsReducer,
	register: registerReducer,
	newsfeed: newsfeedReducer
});

export default rootReducer;
