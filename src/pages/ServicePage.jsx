import React from 'react'
import Service from '../sections/Service/Service'
import PageLayout from '../layout/PageLayout'
import Subscribe from '../sections/Subscribe/Subscribe'

const ServicePage = () => {
	return (
		<PageLayout title='Service Page'>
			<Service />
			<Subscribe />
		</PageLayout>
	)
}

export default ServicePage
