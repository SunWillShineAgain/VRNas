import React from 'react'
import './PageAboutUs.scss'
import SmallVideoSecion from '../../components/SmallVIdeoSection/SmallVIdeoSection'
import imgSrc from '/images/2.png'

const PageAboutUs = () => {
	return (
		<div className='page__aboutus'>
			<div className='section-column'>
				<div className='gradient-caption'>ABOUT US</div>
				<h2 className='heading-h2'>
					Bringing Your Vision to Life: Learn About VRNas
				</h2>
				<div className='page__aboutus-text'>
					<p>
						VRNas is a leading provider of VR services for education,
						entertainment, architecture, and events. Our mission is to bring the
						power of virtual reality to everyone, allowing them to explore new
						worlds, learn in new ways, and experience events in a whole new
						light.
					</p>
					<p>
						Our team consists of experienced VR developers, designers, and
						technicians who are passionate about VR and dedicated to delivering
						the highest quality work. We use the latest VR hardware and software
						to create immersive, interactive experiences that are tailored to
						your specific needs.
					</p>
					<p>
						From initial consultation to final delivery, we are committed to
						providing exceptional customer service. Our goal is to ensure that
						you are completely satisfied with every aspect of your VR
						experience.
					</p>
				</div>
			</div>
			<div className='section-column section-column-right'>
				<div className='page__aboutus-video'>
					<SmallVideoSecion image={imgSrc} />
				</div>
				<div className='page__aboutus-image gradient-bg'>
					<img src='images/9.png' alt='' />
				</div>
			</div>
		</div>
	)
}

export default PageAboutUs
