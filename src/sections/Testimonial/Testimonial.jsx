import React, { useState } from 'react'
import './Testimonial.scss'
import TestimonialList from '../../components/TestimonialList/TestimonialList'

const testimonial = [
	{
		image: 'images/testimonial-1.png',
		text: 'Voluptates obcaecati ad magnam non dicta! Inventore maxime deserunt ratione?',
		caption: 'Gerbert Dullsun',
		role: 'Producer',
	},
	{
		image: 'images/testimonial-2.png',
		text: 'The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.',
		caption: 'Robert Fox',
		role: 'CEO Anono',
	},
	{
		image: 'images/testimonial-3.png',
		text: 'Lorem ipsum dolor sit amet.',
		caption: 'Keyanu Rocks',
		role: 'Main charter',
	},
	{
		image: 'images/testimonial-4.png',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nam, illum amet pariatur, nisi eligendi perspiciatis iste eius, unde facere ab quis!',
		caption: 'Ron Potter',
		role: 'Adminstrator',
	},
	{
		image: 'images/testimonial-5.png',
		text: 'Nam cumque, similique voluptatem aperiam vel laborum voluptatum.',
		caption: 'Albert Socks',
		role: 'EVO Anono',
	},
	{
		image: 'images/testimonial-6.png',
		text: 'Laudantium quisquam dignissimos exercitationem, repudiandae eius alias omnis voluptas, neque accusantium inventore expedita corporis, repellat incidunt.',
		caption: 'Samuel Rodrigez',
		role: 'Subminist',
	},
]

const Testimonial = () => {
	return (
		<section className='testimonial'>
			<div className='gradient-caption'>TESTIMONIAL</div>

			<h2 className='heading-h2'>What Our Clients Are Saying</h2>
			<div className='testimonial__bg'>
				<img src='images/8.png' alt='' />
				<TestimonialList data={testimonial} />
			</div>
		</section>
	)
}

export default Testimonial
