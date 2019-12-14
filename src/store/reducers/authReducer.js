import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utils/helper';

const initialState = {
	user: null,
	token: null,
	isLoading: false,
	errors: null
};

const authStart = (state, action) => {
	return updateObject(state, { error: null, isLoading: true });
};

const authSuccess = (state, action) => {
	return updateObject(state, {
		token: action.payload.token,
		user: action.payload.user,
		error: null,
		isLoading: false
	});
};

const authFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		isLoading: false
	});
};

const authLogout = (state, action) => {
	return updateObject(state, { token: null, user: null });
};

const setAuthRedirectPath = (state, action) => {
	return updateObject(state, { authRedirectPath: action.path });
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return authStart(state, action);
		case actionTypes.AUTH_SUCCESS:
			return authSuccess(state, action);
		case actionTypes.AUTH_FAIL:
			return authFail(state, action);
		case actionTypes.AUTH_LOGOUT:
			return authLogout(state, action);
		case actionTypes.SET_AUTH_REDIRECT_PATH:
			return setAuthRedirectPath(state, action);
		default:
			return state;
	}
};

export default reducer;
