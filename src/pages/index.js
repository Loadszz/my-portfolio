import React, { useState } from 'react';
import { Aldrich, Orbitron, Rajdhani } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

const aldrich = Aldrich({
	variable: '--font-aldrich',
	subsets: ['latin'],
	weight: ['400']
})
const orbitron = Orbitron({
	variable: '--font-orbitron',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800', '900']
})
const rajdhani = Rajdhani({
	variable: '--font-rajdhani',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700']
})


export default function Home() {

	const [theme, setTheme] = useState('light')
	const handleThemeSwitch = () => {
		const html = document.querySelector('html')
		if (theme === 'light') {
			setTheme('dark')
			html.classList.add('dark')
		} else {
			html.classList.remove('dark')
			setTheme('light')
		}
	}
	return (
		<main className={`${aldrich.variable} ${orbitron.variable} ${rajdhani.variable}`}>
			<div className='dark:bg-dark bg-no-repeat bg-cover overflow-hidden bg-light'>
				<Header theme={theme} handleThemeSwitch={handleThemeSwitch} />
				<Banner />
				<Nav />
				<About />
				<Services />
				<Work theme={theme} />
				<Contact />
				{/* <div className='h-[4000px]'></div> */}
			</div>
		</main>
	)
}
