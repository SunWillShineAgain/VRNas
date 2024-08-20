import React from 'react'
import './PageContacts.scss'
import LocationIcon from '../../assets/Icons/LocationIcon'
import EmailIcon from '../../assets/Icons/EmailIcon'
import PhoneIcon from '../../assets/Icons/PhoneIcon'
import { Link } from 'react-router-dom'
import RoundGradientIcon from '../../components/RoundGradientIcon/RoundGradientIcon'

const PageContacts = () => {
	return (
		<section className='page__contacts'>
			<div className='page__contacts-item'>
				<RoundGradientIcon size={65} icon={<EmailIcon />} />
				<div className='gradient-caption'>EMAIL</div>
				<Link
					className='page__contacts-item-link'
					to='mailto:Support@VRNas.com'
				>
					Support@VRNas.com
				</Link>
			</div>
			<div className='page__contacts-item'>
				<RoundGradientIcon size={65} icon={<LocationIcon />} />
				<div className='gradient-caption'>ADDRESS</div>
				<div className='page__contacts-item-link'>
					Tanjung Sari Street no. 48, Pontianak City
				</div>
			</div>
			<div className='page__contacts-item'>
				<RoundGradientIcon size={65} icon={<PhoneIcon />} />
				<div className='gradient-caption'>PHONE</div>
				<Link className='page__contacts-item-link' to='tel:+1234567890'>
					+123 456 7890
				</Link>
			</div>
		</section>
	)
}

export default PageContacts
