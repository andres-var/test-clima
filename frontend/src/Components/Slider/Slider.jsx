import React          from "react";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";


// Import our styles
import "./Slider.scss";

const Slider = () => {

	return (
		<div id="Slider">
			 <Swiper
				pagination={{
					clickable : true,
				}}
				className="mySwiper"
				modules={[Pagination]}

			>
				{
					Array.from(Array(10).keys()).map( (item, index) => (
						<SwiperSlide key={index}>
							<div className="container-slider-text">
								<div className="slider-text">
									<h1>Test-Clima {index+1}</h1>
								</div>
								<div></div>
							</div>
						</SwiperSlide>
					) )
				}
			</Swiper>
		</div>
	);
};

export default Slider;
