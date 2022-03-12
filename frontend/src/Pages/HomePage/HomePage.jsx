import React from "react";

import Slider         from "Components/Slider";
import Nav            from "Components/Nav";
import Footer         from "Components/Footer";
import Climates       from "Components/Climates";
import RepeaterZipCodes from "Components/RepeaterZipCodes";


const HomePage = () => {
	return (
		<>
			<Nav />
			<Slider />
			<RepeaterZipCodes />
			<Climates />
			<Footer />
		</>
	);
};

export default HomePage;
