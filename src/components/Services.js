import React, { useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { fadeIn } from '@/utils/variants';
import { motion } from 'framer-motion';

const Services = () => {
	const [services, setServices] = useState([
		{
			name: 'HTML',
			description: 'My code is completely valid and clean, I can stick to this or that methodology. The layout is flexible and adaptive for all screens of the device.',
			link: 'Learn more',
		},
		{
			name: 'CSS',
			description: 'I mainly use the SASS/SCSS preprocessor. I can also use Tailwind CSS for quick projects.',
			link: 'Learn more',
		},
		{
			name: 'JavaScript',
			description: 'I write clear and clean code. I work well with third-party plugins and modules. I am using pure JS. I can also make edits using jQuery.',
			link: 'Learn more',
		},
		{
			name: 'Next/ReactJS',
			description: 'Today I am working in this direction. I`m trying to bring my knowledge of the React library to perfection. I can write my own code and use third- party components.',
			link: 'Learn more',
		}
	])

	return <section className='section' id='services'>
		<div className="container mx-auto">
			<div className='flex flex-col lg:flex-row lg:gap-x-4'>
				{/* text */}
				<motion.div
					variants={fadeIn('right', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className='flex-1 mb-12 lg:mb-0'>
					<h2 className='h2 dark:text-accent text-blue-500 mb-6'>What I Do</h2>
					<h3 className='h3 max-w-[455px] mb-16 dark:text-white text-black'>I create websites of various complexity</h3>
					<button className='dark:btn btn-light btn-sm lg:mb-16'><a href="https://github.com/Loadszz/">
						See my work</a></button>
					<div className='w-[350px] hidden lg:block'>
						<img src="\images\surfing-the-net.webp" alt="" />
					</div>
				</motion.div>
				{/* services */}
				<motion.div
					variants={fadeIn('left', 0.5)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className='flex-1'>
					{/* services list */}
					<div>
						{services.map((service, index) => (
							<div
								className='border-b  dark:border-white/20 border-black/20 pb-5 mb-[38px] flex'
								key={index}>
								<div className='sm:max-w-[450px] mr-6'>
									<h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6 dark:text-white text-black'>{service.name}</h4>
									<p className='font-secondary leading-tight dark:text-white text-black'>{service.description}</p>
								</div>
								<div className='flex flex-col flex-1 items-end'>
									<a href="/documents/FrontendMikhailIvanovEng.pdf" className='dark:btn btn-light w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight /></a>
									<a href="/documents/FrontendMikhailIvanovEng.pdf" className='dark:text-gradient text-gradient-light text-sm hidden sm:block'>{service.link}</a>
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	</section>;
};

export default Services;
