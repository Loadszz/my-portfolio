import React from 'react';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { Link } from 'react-scroll';


const Banner = () => {
	return <section className='min-h-[85vh] lg:min-[78vh] flex items-center' id='home'>
		<div className="container mx-auto">
			<div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
				<div className='flex-1 text-center font-secondary lg:text-left'>
					<motion.h1
						variants={fadeIn('up', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amout: 0.7 }}
						className='text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-2 dark:text-white text-black'>
						MICHAEL <span>IVANOV</span>
					</motion.h1>
					<motion.div
						variants={fadeIn('up', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amout: 0.7 }}
						className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
						<span className='dark:text-white text-black mr-4'>I am a</span>
						<TypeAnimation sequence={[
							'Junior',
							2000,
							'Front-end',
							2000,
							'Developer',
							2000,
						]}
							speed={50}
							className='dark:text-accent text-blue-500'
							wrapper='span'
							repeat={Infinity} />
					</motion.div>
					<motion.p
						variants={fadeIn('up', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amout: 0.7 }}
						className='mb-8 max-w-lg mx-auto lg:mx-0 dark:text-white text-black'>I’m a 28 years old a developer with experience building
						websites.
						I have experience with HTML and CSS 3,
						JavaScript, React, SEO.
						I’m open for constructive criticism in the workflow. I’m
						highly motivated to gain new skills and experience so I
						looking for a strong team with big ambitions. </motion.p>
					<motion.div
						variants={fadeIn('up', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amout: 0.7 }}
						className='flex max-w-max gap-x-6 items-center mb-12
					mx-auto lg:mx-0'>
						<button
							type="button"
							className="dark:btn btn-light btn-lg"><a href="https://t.me/Loadszz">Contact me</a></button>
						<Link
							to='work'
							smooth={true}
							spy={true}
							className='dark:text-gradient text-gradient-light btn-link cursor-pointer'>
							My Portfolio
						</Link>
					</motion.div>
					<motion.div
						variants={fadeIn('up', 0.7)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amout: 0.7 }}
						className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 dark:text-white text-black'>
						<a href="https://www.linkedin.com/in/ivanov-mikhail-803026255/">
							<FaLinkedin />
						</a>
						<a href="https://github.com/Loadszz/">
							<FaGithub />
						</a>
						<a href="https://t.me/Loadszz">
							<FaTelegramPlane />
						</a>
					</motion.div>
				</div>
				<motion.div
					variants={fadeIn('down', 0.5)}
					initial='hidden'
					whileInView={'show'}
					className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
					<img src="./images/laptop-wave.webp" alt="" />
				</motion.div>
			</div>
		</div>
	</section>;
};

export default Banner;
