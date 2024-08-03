import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import LogoIcon from '../../assets/Icons/LogoIcon'
import TwitterIcon from '../../assets/Icons/TwitterIcon'
import FacebookIcon from '../../assets/Icons/FacebookIcon'
import InstagramIcon from '../../assets/Icons/InstagramIcon'
import GithubIcon from '../../assets/Icons/GithubIcon'
import LocationIcon from '../../assets/Icons/LocationIcon'
import EmailIcon from '../../assets/Icons/EmailIcon'
import PhoneIcon from '../../assets/Icons/PhoneIcon'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__content'>
					<div className='footer__column-left'>
						<Link to='/'>
							<LogoIcon />
						</Link>
						<div className='footer__social'>
							<div className='footer__social-item'>
								<Link to='#' className='footer__social-link'>
									<TwitterIcon />
								</Link>
							</div>
							<div className='footer__social-item'>
								<Link to='#' className='footer__social-link'>
									<FacebookIcon />
								</Link>
							</div>
							<div className='footer__social-item'>
								<Link to='#' className='footer__social-link'>
									<InstagramIcon />
								</Link>
							</div>
							<div className='footer__social-item'>
								<Link to='#' className='footer__social-link'>
									<GithubIcon />
								</Link>
							</div>
						</div>
					</div>
					<div className='footer__column-right'>
						<div className='footer__menu-column'>
							<div className='footer__menu-title'>Quicklinks</div>
							<ul>
								<li>
									<Link to='/' className='footer__menu-link'>
										Home
									</Link>
								</li>
								<li>
									<Link to='/pricing' className='footer__menu-link'>
										Pricing Plan
									</Link>
								</li>
								<li>
									<Link to='/service' className='footer__menu-link'>
										Service
									</Link>
								</li>
								<li>
									<Link to='/team' className='footer__menu-link'>
										Our Team
									</Link>
								</li>
							</ul>
						</div>
						<div className='footer__menu-column'>
							<div className='footer__menu-title'>Support</div>
							<ul>
								<li>
									<Link to='/about' className='footer__menu-link'>
										About us
									</Link>
								</li>
								<li>
									<Link to='/contacts' className='footer__menu-link'>
										Contact us
									</Link>
								</li>
								<li>
									<Link to='/faq' className='footer__menu-link'>
										FAQ
									</Link>
								</li>
								<li>
									<Link to='/terms' className='footer__menu-link'>
										Tems & Conditions
									</Link>
								</li>
								<li>
									<Link to='/privacy' className='footer__menu-link'>
										Privacy Policy
									</Link>
								</li>
							</ul>
						</div>
						<div className='footer__menu-column'>
							<div className='footer__menu-title'>Need Help?</div>
							<ul>
								<li>
									<LocationIcon />
									<Link to='#' className='footer__menu-link'>
										Tanjung Sari Street no.48, Pontianak City
									</Link>
								</li>
								<li>
									<EmailIcon />
									<Link
										to='mailto:Support@VRNas.com'
										className='footer__menu-link'
									>
										Support@VRNas.com
									</Link>
								</li>
								<li>
									<PhoneIcon />
									<Link to='tel:1234567890' className='footer__menu-link'>
										+123 456 7890
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='copyright'>© Copyright 2024. All Rights Reserved</div>
			</div>
		</footer>
	)
}

export default Footer
