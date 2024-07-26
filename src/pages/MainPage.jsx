import React from 'react'
import Layout from '../layout/Layout'
import Hero from '../sections/Hero/Hero'
import Advantages from '../sections/Advantages/Advantages'
import AboutUs from '../sections/AboutUs/AboutUs'
import Service from '../sections/Service/Service'
import WhyUs from '../sections/WhyUs/WhyUs'
import GetStarted from '../sections/GetStarted/GetStarted'
import Testimonial from '../sections/Testimonial/Testimonial'
import Pricing from '../sections/Pricing/Pricing'
import Partners from '../sections/Partners/Partners'
import Articles from '../sections/Articles/Articles'
import Subscribe from '../sections/Subscribe/Subscribe'

const MainPage = () => {
	return (
		<Layout>
			<Hero />
			<Advantages />
			<AboutUs />
			<Service />
			<WhyUs />
			<GetStarted />
			<Testimonial />
			<Pricing />
			<Partners />
			<Articles />
			<Subscribe />
		</Layout>
	)
}

export default MainPage
