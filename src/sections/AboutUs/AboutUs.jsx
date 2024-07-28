import React from 'react'
import './AboutUs.scss'
import Button from '../../components/Button/Button'
import SmallVideoSection from '../../components/SmallVIdeoSection/SmallVIdeoSection'
import imgSrc from '/images/4.png'

const AboutUs = () => {
	return (
		<section className='about'>
			<div className='about__column gradient-bg'>
				<img src='images/3.png' alt='' />
				<div className='about__video'>
					<SmallVideoSection image={imgSrc} />
				</div>
			</div>
			<div className='about__column'>
				<div className='gradient-caption'>about us</div>
				<h2 className='heading-h2'>
					Bring your events to life like never before with our VR services.
				</h2>
				<div className='about__text'>
					VRNas is a leading provider of VR services for education,
					entertainment, architecture, and events. Our mission is to bring the
					power of virtual reality to everyone, allowing them to explore new
					worlds, learn in new ways, and experience events in a whole new light.
				</div>
				<ul className='about__list'>
					<li className='about__list-item'>Cutting-Edge Technology</li>
					<li className='about__list-item'>Versatile Applications</li>
					<li className='about__list-item'>Affordable and Accessible</li>
				</ul>
				<Button text='read more' variant='filled bold' />
			</div>
		</section>
	)
}

export default AboutUs
