export const deleteHelper = (state, action) => {
	return state.data.filter(item => item._id !== action.payload);
};

export const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties
	};
};
