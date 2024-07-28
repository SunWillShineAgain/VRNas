import React from 'react'
import './Advantages.scss'

const Advantages = () => {
	return (
		<section className='advantages'>
			<div className='advantages__column'>
				<div className='advantages__icon'>
					<img src='icons/advantage-1.png' alt='advantage-1' />
				</div>
				<div className='advantages__title'>Expertise</div>
				<div className='advantages__text'>
					Our team consists of experienced VR developers, designers, and
					technicians who have a passion for VR and a commitment to delivering
					quality work and give the best service
				</div>
			</div>
			<div className='advantages__column'>
				<div className='advantages__icon'>
					<img src='icons/advantage-2.png' alt='advantage-2' />
				</div>
				<div className='advantages__title'>Customization</div>
				<div className='advantages__text'>
					Every client is unique, and we believe every VR experience should be
					too. We'll work with you to create a customized solution that meets
					your specific needs and goals
				</div>
			</div>
			<div className='advantages__column'>
				<div className='advantages__icon'>
					<img src='icons/advantage-3.png' alt='advantage-3' />
				</div>
				<div className='advantages__title'>Service</div>
				<div className='advantages__text'>
					We believe in providing exceptional customer service, from initial
					consultation to final delivery. Our goal is to ensure you're satisfied
					with every aspect of your VR experience.
				</div>
			</div>
		</section>
	)
}

export default Advantages
