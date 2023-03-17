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
			<div className=' flex-col  items-center justify-center my-4 mt-5'>
				<p className=' text-white font-medium capitalize'>{title}</p>
				{/* <hr className=' border-[#ffffff] w-full' /> */}
			</div>
			<div className=' flex flex-col w-full   items-center justify-center text-white '>
				{data.list.splice(0, 7).map((item, idx) => (
					<div
						key={idx}
						className=' flex flex-row max-[934px]:flex-col max-[934px]:justify-center justify-between text-center items-center border-[1px] py-4 px-8 w-full m-2 border-[#162b45] rounded-[40px] h-[200px] '
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
