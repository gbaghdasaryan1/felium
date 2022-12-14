import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCube, Pagination } from "swiper";

export default function ProductDetailsSlider() {
	return (
		<div className='ProductDetailsSlider'>
			<Swiper
				effect={"cube"}
				grabCursor={true}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				pagination={true}
				modules={[EffectCube, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
