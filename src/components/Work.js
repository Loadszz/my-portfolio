import React from 'react';
import { fadeIn } from '@/utils/variants';
import { motion } from 'framer-motion';


const Work = ({ theme, setTheme, handleThemeSwitch }) => {
	return <section className='section' id='work'>
		<div className="container mx-auto">
			<div className='flex flex-col items-end lg:flex-row gap-x-10'>
				<motion.div
					variants={fadeIn('right', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className='flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0'>
					{/* text */}
					<div>
						<h2 className='h2 leading-tight dark:text-accent text-blue-500'>My Latest <br />
							work</h2>
						<p className='max-w-sm mb-16 dark:text-white text-black'>Here are my most successful and diverse works for every taste using different knowledge and approaches.</p>
						<button className='dark:btn btn-light btn-sm'><a href="https://github.com/Loadszz/">
							View all projects</a></button>
					</div>
					{/* image */}
					<a href='http://dist.zzz.com.ua/' className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
						<div className='group-hover:bg-black/70 w-full h-full absolute z-40 translate-all
						duration-300'></div>
						<img
							className='group-hover:scale-125 transition-all duration-500'
							src={theme === 'light' ? '/images/portfolio-img2-light.webp' : '/images/portfolio-img2-dark.webp'} alt="" />
						{/* pretitle */}
						<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all
						duration-500 z-50'>
							<span className='dark:text-gradient text-gradient-light-work'>
								Department website</span>
						</div>
						{/* title */}
						<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all
						duration-700 z-50'>
							<span className='text-3xl text-white'>KTUCA</span>
						</div>
					</a>
				</motion.div>
				<motion.div
					variants={fadeIn('left', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className='flex flex-1 flex-col gap-y-10'>
					{/* image */}
					<a href='http://isdesign.site/' className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
						<div className='group-hover:bg-black/70 w-full h-full absolute z-40 translate-all
						duration-300'></div>
						<img
							className='group-hover:scale-125 transition-all duration-500'
							src={theme === 'light' ? '/images/portfolio-img1-light.webp' : '/images/portfolio-img1-dark.webp'} alt="" />
						{/* pretitle */}
						<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all
						duration-500 z-50'>
							<span className='dark:text-gradient text-gradient-light-work'>Portfolio</span>
						</div>
						{/* title */}
						<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all
						duration-700 z-50'>
							<span className='text-3xl text-white'>isdesign
							</span>
						</div>
					</a>
					{/* image */}
					<a href='https://honey3-5dtkcd7ki-loadszz.vercel.app/' className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
						<div className='group-hover:bg-black/70 w-full h-full absolute z-40 translate-all
						duration-300'></div>
						<img
							className='group-hover:scale-125 transition-all duration-500'
							src={theme === 'light' ? '/images/portfolio-img3-light.webp' : '/images/portfolio-img3-dark.webp'} alt="" />
						{/* pretitle */}
						<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all
						duration-500 z-50'>
							<span className='dark:text-gradient text-gradient-light-work'>Online store</span>
						</div>
						{/* title */}
						<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all
						duration-700 z-50'>
							<span className='text-3xl text-white'>honey</span>
						</div>
					</a>
				</motion.div>
			</div>
		</div>
	</section>;
};

export default Work;
