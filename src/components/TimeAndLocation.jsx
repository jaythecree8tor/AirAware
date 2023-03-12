import React from "react";
import { GoLocation } from "react-icons/go";
function TimeAndLocation() {
	return (
		<div>
			<div className=' flex items-center justify-center mt-6 mb-3'>
				<p className='flex items-center text-white text-xl font-medium'>
					<GoLocation size={20} color='white' className='cursor-pointer' />
					&nbsp;Berlin, DE
				</p>
			</div>
		</div>
	);
}

export default TimeAndLocation;
