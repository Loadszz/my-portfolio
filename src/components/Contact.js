import React, { useEffect, useState } from 'react';
import { fadeIn } from '@/utils/variants';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { ImSpinner2 } from 'react-icons/im';


const Contact = () => {
	const [state, handleSubmit] = useForm("xoqzbarw");
	const [endingText, setEndingText] = useState(<ImSpinner2 className='animate-spin' />)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(true)
			if (loading === true) {
				setEndingText('Thank you for contacting!')
				return () => clearTimeout(timer)
			}
		}, 2000);
	}, [state.succeeded])

	return <section className='py-16 lg:section' id='contact'>
		<div className="container mx-auto">
			<div className='flex flex-col lg:flex-row'>
				{/* text */}
				<motion.div
					variants={fadeIn('right', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className='flex-1 flex justify-start items-center'>
					<div>
						<h4 className='text-xl uppercase dark:text-accent text-blue-500 font-medium mb-2 tracking-wide'>Get in touch</h4>
						<h2 className='text-[45px] lg:text-[90px] leading-none mb-12 dark:text-white text-black'>Let's work <br /> together</h2>
					</div>
				</motion.div>
				{/* form */}
				{state.succeeded
					?
					<div className='flex justify-center items-center text-center py-20 lg:p-0 lg:w-[500px] text-[30px] lg:text-[60px] leading-none dark:text-white text-black'>
						{endingText}
					</div>
					:
					<motion.form
						onSubmit={handleSubmit}
						variants={fadeIn('left', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 border dark:border-white border-black/20 rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
						action="#">
						<input
							id='name'
							name='name'
							className='bg-transparent border-b py-3 outline-none w-full dark:placeholder:text-white placeholder:text-black
						dark:focus:border-accent focus:border-blue-500 dark:border-white border-black/20 dark:text-white text-black transition-all'
							type="text"
							placeholder='Your name' />
						<input
							id="email"
							type="email"
							name="email"
							className='bg-transparent border-b py-3 outline-none w-full dark:placeholder:text-white placeholder:text-black
						dark:focus:border-accent focus:border-blue-500 dark:border-white border-black/20 dark:text-white text-black transition-all'
							placeholder='Your email' />
						<textarea
							id="message"
							name="message"
							className='bg-transparent border-b py-12 outline-none w-full dark:placeholder:text-white placeholder:text-black
						dark:focus:border-accent focus:border-blue-500 dark:border-white border-black/20 dark:text-white text-black transition-all resize-none mb-12'
							placeholder='Your message'>
						</textarea>
						<button
							type='submit'
							disabled={state.submitting}
							className='dark:btn btn-light btn-lg'>Send message</button>
					</motion.form>
				}
			</div>
		</div>
	</section>;
};

export default Contact;
