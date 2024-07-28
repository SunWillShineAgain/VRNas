import React from 'react'
import './Partners.scss'
import PartnersList from '../../components/PartnersList/PartnersList'

const Partners = () => {
	return (
		<section className='partners'>
			<div className='gradient-caption'>Our Trusted Partners</div>
			<h2 className='heading-h2'>Discover the Companies We Work With</h2>
			<div className='partners__image'>
				<img src='images/10.png' alt='' />
				<PartnersList />
			</div>
		</section>
	)
}

export default Partners
