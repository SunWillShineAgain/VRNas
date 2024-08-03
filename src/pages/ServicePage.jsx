import React from 'react'
import Service from '../sections/Service/Service'
import PageLayout from '../layout/PageLayout'
import Subscribe from '../sections/Subscribe/Subscribe'
import Pricing from '../sections/Pricing/Pricing'
import Testimonial from '../sections/Testimonial/Testimonial'
import Facts from '../sections/Facts/Facts'

const facts = [
	{
		text: 'HAPPY CLIENTS',
		value: '123k+',
	},
	{
		text: 'PROJECT COMPLETE',
		value: '300k+',
	},
	{
		text: 'YEARS EXPERIENCE',
		value: '10+',
	},
]

const ServicePage = () => {
	return (
		<PageLayout title='Service Page' cls='service'>
			<Service />
			<Facts data={facts} />
			<Pricing />
			<Testimonial />
			<Subscribe />
		</PageLayout>
	)
}

export default ServicePage
