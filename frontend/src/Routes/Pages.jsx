import React, {
	Suspense,
} from "react";

import {
	Navigate,
	Route,
	Routes,
} from "react-router-dom";

// Import Own Components
import { appRoutes } from "./AppRoutes";


const Pages = () => (
	<Suspense fallback={<></>}>
		<Routes>
			<Route path="*" element={<Navigate to="/" />} />

			<Route exact path='/'>
				{ appRoutes.map(({ path, Component }, i) => (
					<Route key={i} exact path={path} element={<><Component /></>} />
				)) }
			</Route>


			{/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
		</Routes>
	</Suspense>
);

export default Pages;
