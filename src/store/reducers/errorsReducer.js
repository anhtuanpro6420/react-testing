import * as Types from '../actions/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
	switch (action.type) {
		case Types.GET_ERRORS:
			return action.payload;
		default:
			return state;
	}
}
