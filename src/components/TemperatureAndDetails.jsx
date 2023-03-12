import React from "react";
import { GoLocation } from "react-icons/go";
// import { sun,moon,dCloudy } from "../assets/icons";
import { temp, wind, humid } from "../assets/images";


const TemperatureAndDetails = ({ data }) => {
	return (
		<div>
			<div className=' flex items-center justify-center mt-6 mb-3'>
				<p className='flex items-center text-white text-xl font-medium'>
					<GoLocation size={20} color='white' className='cursor-pointer' />
					&nbsp;{data.city}
				</p>
			</div>
			<div className='flex  items-center justify-between py-1 text-xl '>
				<div className=' flex flex-row justify-around items-center w-full px-8 max-[934px]:flex-col'>
					<div className=' flex '>
						<img
							src={`icons/${data.weather[0].icon}.svg`}
							alt='ukf'
							className='drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] h-52 w-52  max-[934px]:w-[160px] max-[934px]:h-[160px] '
						/>
					</div>
					<div className=' flex-col max-[934px]:justify-center text-center z-40 text-white'>
						<div className=' flex'>
							<p className=' text-8xl font-bold max-[934px]:text-9xl'>{Math.round(data.main.temp)}</p>
							<span className=' font-thin text-[#ffffff67] text-[34px]'>
								&deg;
							</span>
						</div>

						<p className='text-[#ffffffbe] text-xs max-[934px]:text-xl'>
							{data.weather[0].description}
						</p>
					</div>
				</div>
			</div>
			<div className=' flex items-center justify-center my-6 max-[934px]:my-0 max-[934px]:mb-2'>
				{/* <p className=' text-[#ffffff8d] font-extralight max-[934px]:text-xs'>
					Tuesday, 31 May
				</p> */}
			</div>
			<hr className=' border-[#ffffff13]' />
			<div className=' flex flex-row w-full justify-between items-center mt-3 px-6'>
				<div className=' font-light flex-col text-center justify-center'>
					<div className=' flex justify-center'>
						<img src={temp} alt='' />
					</div>
					<p className=' text-sm'>{Math.round(data.main.feels_like)} &deg;</p>
					<p className=' text-xs text-[#ffffff66]'>Real feel</p>
				</div>
				<div className=' font-light flex-col text-center justify-center'>
					<div className=' flex justify-center'>
						<img src={humid} alt='' />
					</div>
					<p className=' text-sm'>{data.main.humidity}%</p>
					<p className=' text-xs text-[#ffffff66]'>Humidity</p>
				</div>
				<div className=' font-light flex-col text-center justify-center'>
					<div className=' flex justify-center'>
						<img src={wind} alt='' />
					</div>
					<p className=' text-sm'>{data.wind.speed} km/h</p>
					<p className=' text-xs text-[#ffffff66]'>Wind</p>
				</div>
			</div>
		</div>
	);
};

export default TemperatureAndDetails;
