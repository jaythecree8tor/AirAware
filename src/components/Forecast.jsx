import React from "react";
// import { sun } from '../assets/icons'

const WEEK_DAYS = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

const Forecast = ({ data, title }) => {
  const daysInWeek = new Date().getDay();
  const forecastDays =  WEEK_DAYS.slice(daysInWeek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, daysInWeek));
  console.log(forecastDays);
	return (
		<div>
			<div className=' flex  items-center justify-start my-4 mx-12 mt-5'>
				<p className=' text-white font-medium capitalize'>{title}</p>
				{/* <hr className=' border-[#ffffff] w-full' /> */}
			</div>
			<div className=' flex flex-row max-[934px]:flex-col flex-wrap items-center justify-between text-white mx-6 max-[934px]:flex-nowrap '>
				{data.list.splice(0, 7).map((item, idx) => (
					<div
						key={idx}
						className=' flex flex-col max-[934px]:flex-row max-[934px]:justify-between justify-center text-center items-center border-[1px] py-4 px-8 max-[934px]:w-full m-2 border-[#162b45] rounded-[40px] h-[200px] '
					><p className='text-[#667689] font-light text-sm'>{forecastDays[idx]}</p>
						<p className=''>23&deg;</p>

						<img
							src={`icons/${item.weather[0].icon}.svg`}
							alt=''
							className=' my-1'
						/>       
            <p className='text-[#667689] font-light text-sm'>{item.weather[0].description}</p>
						
					</div>
				))}
				{/*  */}
			</div>
		</div>
    
    
	);
};

export default Forecast;
