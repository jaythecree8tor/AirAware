import React from "react";
import { topCities } from "../constants";
const TopButtons = () => {
	return (
		<div className='fixed inset-x-0 flex items-center justify-around my-6 max-[350px]:my-6 max-[370px]:text-[11px] top-14 text-white px-5 py-5 bg-[#000a18] z-[150]'>
			{topCities.map((city) => (
				<button key={city.id}>{city.title}</button>
			))}
		</div>
	);
};

export default TopButtons;
