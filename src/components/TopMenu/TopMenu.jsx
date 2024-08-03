import React from 'react'
import { NavLink } from 'react-router-dom'
import './TopMenu.scss'

const TopMenu = () => {
	return (
		<nav>
			<ul className='top-menu'>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/about'>About us</NavLink>
				</li>
				<li>
					<NavLink to='/service'>Service</NavLink>
				</li>
				<li>
					<NavLink to='/pricing'>Pricing</NavLink>
				</li>
				<li>
					<NavLink to='/team'>Team</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default TopMenu
