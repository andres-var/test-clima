import {
	ADD_CLIMATE_FAILURE,
	ADD_CLIMATE_STARTED,
	ADD_CLIMATE_SUCCESS,
	CLEAR_CLIMATE,
	DELETE_CLIMATE,
} from "Store/Constants/ClimateConstants";

const initialState = {
	climates : [],
};

const climateReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CLIMATE_STARTED:
			return {
				...state,
				loading : true,
			};
		case ADD_CLIMATE_SUCCESS:
			return {
				...state,
				loading  : false,
				error    : null,
				climates : [...state.climates, action?.payload],
			};
		case ADD_CLIMATE_FAILURE:
			return {
				...state,
				loading : false,
				error   : action.payload.error,
			};
		case DELETE_CLIMATE:
			return {
				...state,
				climates : state.climates.filter((climate, index) => index !== action.payload.index),
			};
		case CLEAR_CLIMATE:
			return {
				...state,
				climates : [],
			};
		default:
			return state;
	}
};

export default climateReducer;
