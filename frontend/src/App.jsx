import React                       from "react";
import { PersistGate }             from "redux-persist/integration/react";
import { Provider }                from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer }          from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Import Own Components
import Pages                from "./Routes";
import { Store, persistor } from "./Store";


import "./Resources/sass/index.scss";

function App() {
	return (
		<Router>
			<Provider store={Store}>
				<PersistGate loading={<></>} persistor={persistor}>
					<Pages />
				</PersistGate>
				<ToastContainer />
			</Provider>
		</Router>
	);
}

export default App;
