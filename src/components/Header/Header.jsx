import React, { useEffect, useState } from 'react'
import './Header.scss'
import Button from '../Button/Button'
import TopMenu from '../TopMenu/TopMenu'
import LogoIcon from '../../assets/Icons/LogoIcon'

const Header = () => {
	const [scroll, setScroll] = useState(0)

	const scrollHandler = () => {
		setScroll(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler)

		return () => {
			window.removeEventListener('scroll', scrollHandler)
		}
	}, [])

	return (
		<header className={scroll > 50 ? 'scrolled' : ''}>
			<div className='back-layer'></div>
			<div className='container'>
				<LogoIcon />
				{/* <TopMenu /> */}
				<Button text='Contact Us' />
			</div>
		</header>
	)
}

export default Header
