import { combineReducers } from "redux";

// Import Own Components
import climateReducer from "./climateReducer";

export const reducers = {
	climateReducer,
};

const rootReducers = combineReducers(reducers);

export default rootReducers;
