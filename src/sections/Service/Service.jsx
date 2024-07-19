import React from 'react'
import './Service.scss'
import ServiceList from '../../components/ServiceList/ServiceList'

const data1 = [
	{
		title: 'VR Development',
		text: 'From concept to creation, our team of VR developers will bring your vision to life.',
		iconPath: '/icons/service-1.png',
	},
	{
		title: 'VR Design',
		text: 'Our talented VR designers will create immersive and engaging environments that will captivate your audience.',
		iconPath: '/icons/service-2.png',
	},
	{
		title: 'VR Consulting',
		text: 'Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations.',
		iconPath: '/icons/service-3.png',
	},
]

const data2 = [
	{
		title: 'VR Games',
		text: 'We offer a wide selection of VR games that are suitable for players of all ages and skill levels.',
		iconPath: '/icons/service-4.png',
	},
	{
		title: 'VR Events',
		text: 'Make your next event unforgettable with our VR event services.',
		iconPath: '/icons/service-5.png',
	},
	{
		title: 'VR Entertainment',
		text: 'Create a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen.',
		iconPath: '/icons/service-6.png',
	},
]

const Service = () => {
	return (
		<section className='service'>
			<div className='service__row'>
				<div className='service__title'>
					<div className='gradient-caption'>Our service</div>
					<h2 className='heading-h2'>Our Service</h2>
				</div>
				<div className='service__text'>
					We use the latest VR hardware and software to create high-quality VR
					experiences that are accessible and affordable. Our goal is to provide
					exceptional customer service and support, and our team is always
					available to answer any questions and address any concerns you may
					have.
				</div>
			</div>
			<div className='service__list'>
				<ServiceList data={data1} />
				<ServiceList data={data2} />
			</div>
		</section>
	)
}

export default Service
