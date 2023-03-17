import React from "react";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { TbSunHigh, TbSunLow } from "react-icons/tb";
const SunriseAndSunset = ({data}) => {
	return (
		<div className=' text-[#000a18e0]'>
			{/* <div className=' justify-between flex flex-row w-full items-center'>
				<div className=' flex flex-col justify-center text-center'>
					<div className=' flex justify-center'>
						<FiSunrise size={25} />
					</div>
					<p className=' font-light text-sm'>{Math.round(data.sys.sunrise)} AM</p>
				</div>
				<hr className=' border-[#0000000d] w-[40%]' />
				<div className=' flex flex-col justify-center text-center'>
					<div className=' flex justify-center'>
						<FiSunset size={25} />
					</div>
					<p className=' font-light text-sm'>{Math.round(data.sys.sunset)} PM</p>
				</div>
			</div> */}

			<div className=' justify-between flex flex-row w-full items-center'>
				<div className=' flex flex-col justify-center text-center'>
					<div className=' flex justify-center'>
						<TbSunHigh size={25} />
					</div>
					<p className=' font-light text-sm'>
						High: <span>{Math.round(data.main.temp_max)}&deg;</span>
					</p>
				</div>
				<hr className=' border-[#0000000d] w-[40%]' />
				<div className=' flex flex-col justify-center text-center'>
					<div className=' flex justify-center'>
						<TbSunLow size={25} />
					</div>
					<p className=' font-light text-sm'>
						Low: <span>{Math.round(data.main.temp_min)}&deg;</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SunriseAndSunset;
