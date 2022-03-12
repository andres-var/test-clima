import { toast }        from "react-toastify";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

// Import Own Components
import { APIKEY }        from "Config";
import { instanceAxios } from "Helpers";
import {
	CLEAR_CLIMATE,
	DELETE_CLIMATE,
	ADD_CLIMATE_FAILURE,
	ADD_CLIMATE_STARTED,
	ADD_CLIMATE_SUCCESS,
} from "Store/Constants/ClimateConstants";

const addClimate = (codes, clear = false) => async (dispatch, getState) => {
	if (clear) dispatch(clearClimate());

	const { climateReducer: { climates } } = getState();

	dispatch(addClimateStarted());

	try {
		const response = await instanceAxios({
			method : "get",
			url    : "current",
			params : {
				access_key : APIKEY,
				codes,
			},
		});

		const { data } = response.data;

		data.forEach((res) => {
			const find = climates.find((climate) => climate?.location?.name === res?.location?.name);

			if (find) {
				dispatch(addClimateFailure("Already Exist"));
				toast.error(`La ciudad ${res?.location?.name} ya existe (codeZip ${res?.request?.query} )`);
				return;
			}

			if (res?.location?.name) {
				dispatch(addClimateSuccess(res));
				toast.success(`La ciudad ${res?.location?.name} se agrego correctamente (codeZip ${res?.request?.query} )`);
			} else {
				dispatch(addClimateFailure("Error"));
			}
		});
	} catch (error) {
		console.log(error);
		addClimateFailure(error);
		toast.error("Error con el servidor");
	}
};

const addClimateSuccess = (climate) => ({
	type    : ADD_CLIMATE_SUCCESS,
	payload : {
	  ...climate,
	},
});

const addClimateStarted = () => ({
	type : ADD_CLIMATE_STARTED,
});

const addClimateFailure = (error) => ({
	type    : ADD_CLIMATE_FAILURE,
	payload : {
	  error,
	},
});

const clearClimate = () => ({
	type : CLEAR_CLIMATE,
});

const deleteClimate = (index) => async (dispatch, getState) => {
	confirmAlert({
		title   : "Eliminar",
		message : "¿Estas seguro de eliminar la ciudad?",
		buttons : [
			{
				label   : "Si",
				onClick : () => {
					const { climateReducer: { climates } } = getState();

					const climate = climates[index];

					dispatch({
						type    : DELETE_CLIMATE,
						payload : {
							index,
						},
					});

					toast.success(`La ciudad ${climate?.location?.name} se elimino correctamente`);
				},
			},
			{
				label   : "No",
				onClick : () => false,
			},
		],
		  });
};

const ClimateActions = {
	addClimate,
	deleteClimate,
};

export default ClimateActions;
