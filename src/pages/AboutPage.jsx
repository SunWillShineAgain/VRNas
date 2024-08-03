import React from 'react'
import PageLayout from '../layout/PageLayout'
import Subscribe from '../sections/Subscribe/Subscribe'
import Partners from '../sections/Partners/Partners'
import PageAboutUs from '../sections/PageAboutUs/PageAboutUs'
import PageWhyUs from '../sections/PageWhyUs/PageWhyUs'
import WhyUs from '../sections/WhyUs/WhyUs'
import imgSrc from '/images/11.png'
import Team from '../sections/Team/Team'
import FAQ from '../sections/FAQ/FAQ'
import './Pages.scss'

const AboutPage = () => {
	return (
		<PageLayout title='About Us' cls='about'>
			<PageAboutUs />
			<PageWhyUs />
			<WhyUs sectionImgSrc={imgSrc} />
			<Team />
			<Partners />
			<FAQ />
			<Subscribe />
		</PageLayout>
	)
}

export default AboutPage
