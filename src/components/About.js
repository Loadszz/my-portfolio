import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '@/utils/variants';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	})

	return <section className='section' id='about' ref={ref}>
		<div className="container mx-auto">
			<div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-20'>
				{/* img */}
				<motion.div
					variants={fadeIn('right', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className='flex flex-col justify-center items-center flex-1 dark:mix-blend-lighten mix-blend-screen'>
					<img className='max-w-[200px] sm:max-w-[300px] lg:max-w-[100%]' src="/images/about.webp" alt="" />
				</motion.div>
				{/* text */}
				<motion.div
					variants={fadeIn('left', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className='flex-1'>
					<h2 className='h2 dark:text-accent text-blue-500'>About me.</h2>
					<h3 className='h3 mb-4 dark:text-white text-black'>I'm a Junior Front-end Developer with over 3 years of experience.</h3>
					<p className='mb-6 dark:text-white text-black'>
						I am from Kharkov, Ukraine.<br />
						Master degree
						Program Subject Area “Information
						Technologies”

						Program Subject Area “Computer
						sciences”
						Kharkiv National University of Civil
						Engineering and Architecture.<br />
						Search Engine Optimization (SEO)
						IT school — Lemon</p>
					{/* stats */}
					<div className='flex gap-x-6 lg:gap-x-10 mb-12'>
						<div>
							<div className='text-[40px] font-tertiary dark:text-gradient text-blue-400'>
								{
									inView ?
										<CountUp start={0} end={3} duration={5} /> :
										0}
							</div>
							<div className='font-primary text-sm tracking-[2px]  dark:text-white text-black'>
								Years of <br />
								Experience
							</div>
						</div>
						<div>
							<div className='text-[40px] font-tertiary dark:text-gradient text-blue-400'>
								{
									inView ?
										<CountUp start={0} end={4} duration={5} /> :
										0}
							</div>
							<div className='font-primary text-sm tracking-[2px]  dark:text-white text-black'>
								Projects <br /> Completed
							</div>
						</div>
						<div>
							<div className='text-[40px] font-tertiary dark:text-gradient text-blue-400'>
								{
									inView ?
										<CountUp start={0} end={100} duration={5} /> :
										0}%
							</div>
							<div className='font-primary text-sm tracking-[2px] dark:text-white text-black'>
								Responsibility<br />
								For Work
							</div>
						</div>
					</div>
					<div className='flex gap-x-8 items-center'>
						<button className='dark:btn btn-light btn-lg'><a href="https://t.me/Loadszz">Contact me</a></button>
						<Link
							to='work'
							smooth={true}
							spy={true}
							className='dark:text-gradient text-gradient-light btn-link cursor-pointer'>My Project</Link>
					</div>
				</motion.div>
			</div>
		</div>
	</section>;
};

export default About;
