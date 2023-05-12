import React from 'react';
import { BsFillSunFill, BsMoonFill, BsCheck } from 'react-icons/bs';

const Header = ({ theme, handleThemeSwitch }) => {


	return <header className='py-8'>
		<div className="container mx-auto">
			<div className='flex justify-between items-center'>
				<a className='font-primary text-[32px] dark:text-white text-black' href="/">
					{/* <img src='/images/logo.svg' alt="" /> */}
					<span className='dark:text-gradient text-gradient-light'>MICHAEL</span> <br /> IVANOV
				</a>
				<button type="button"
					onClick={handleThemeSwitch}
					className="dark:btn btn-light btn-sm">
					{theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
				</button>
			</div>
		</div>
	</header>;
};

export default Header;
