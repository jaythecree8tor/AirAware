import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logowhite, close, menu } from "../assets/images";
import { BiUserCircle } from "react-icons/bi";
import TopButtons from "./TopButtons";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [toggle2, setToggle2] = useState(false);
	return (
		<div>
			<nav className='fixed inset-x-0 bg-[#000a18] items-center justify-between py-6 px-16 max-[750px]:px-10 max-[300px]:px-6 z-[200] flex'>
				{/* sidebar */}
				<div className='hidden max-[750px]:flex justify-start items-center b'>
					<img
						src={toggle ? close : menu}
						className='w-[22px] h-[22px] object-contain'
						alt='menu'
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? "hidden" : "block"
						} p-6 absolute top-20 left-0 bottom-0 h-screen min-w-[250px] sidebar bg-[#0c1f25a1]  backdrop-filter backdrop-blur-xl  bg-opacity-[0.5]  z-50`}
					></div>
				</div>

				<Link>
					<img
						src={logowhite}
						alt='logo'
						className=' w-[140px] h-[40px] cursor-pointer max-[490px]:w-[124px] max-[490px]:h-[32px]'
					/>
				</Link>

				<div className=' flex items-center space-x-8  max-[750px]:space-x-0'>
					<span className='flex flex-row w-1/4 items-center justify-center space-x-2 max-[750px]:hidden'>
						<button name='metric' className=' text-xl text-white font-light'>
							&deg;C
						</button>
						<p className='text-white text-xl mx-1'> |</p>
						<button name='imperial' className=' text-xl text-white font-light'>
							&deg;F
						</button>
					</span>

					<BiUserCircle
						size={30}
						color='white'
						onClick={() => setToggle2(!toggle2)}
						className='ml-2'
					/>

					<div
						className={`${
							!toggle2 ? "hidden" : "block"
						} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebarr bg-[#0c1f25a1]  backdrop-filter backdrop-blur-xl  bg-opacity-[0.5]  z-250]`}
					>
						<div className='hidden flex-row w-1/4 items-center justify-center space-x-2 max-[750px]:flex'>
							<button name='metric' className=' text-xl text-white font-light'>
								&deg;C
							</button>
							<p className='text-white text-xl mx-1'> |</p>
							<button
								name='imperial'
								className=' text-xl text-white font-light'
							>
								&deg;F
							</button>
						</div>
					</div>
				</div>
			</nav>
		
		</div>
	);
};

export default Navbar;
