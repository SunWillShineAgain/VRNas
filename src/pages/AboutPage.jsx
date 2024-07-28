import React from 'react'
import PageLayout from '../layout/PageLayout'
import Subscribe from '../sections/Subscribe/Subscribe'
import Partners from '../sections/Partners/Partners'

const About = () => {
	return (
		<PageLayout title='About Us'>
			<Partners />
			<Subscribe />
		</PageLayout>
	)
}

export default About
