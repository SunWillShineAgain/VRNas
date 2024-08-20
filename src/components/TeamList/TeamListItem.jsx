import React from 'react'
import TwitterIcon from '../../assets/Icons/TwitterIcon'
import FacebookIcon from '../../assets/Icons/FacebookIcon'
import InstagramIcon from '../../assets/Icons/InstagramIcon'
import { Link } from 'react-router-dom'
import RoundGradientIcon from '../RoundGradientIcon/RoundGradientIcon'

const TeamListItem = ({ item }) => {
	return (
		<div className='team__list-item'>
			<div className='team__list-item-wrap'>
				<div className='team__list-item-layer'></div>
				<div className='team__list-item-image'>
					<img src={item.image} alt={item.name} />
				</div>
				<div className='team__list-item-info'>
					<div className='team__list-item-name'>{item.name}</div>
					<div className='team__list-item-role'>{item.role}</div>
				</div>
				<div className='team__list-item-social'>
					<Link target='_blank' to={item.x} title='Twitter'>
						<RoundGradientIcon size={46} icon={<TwitterIcon />} />
					</Link>
					<Link
						target='_blank'
						to={item.fb}
						className='footer__social-link'
						title='Facebook'
					>
						<RoundGradientIcon size={46} icon={<FacebookIcon />} />
					</Link>
					<Link
						target='_blank'
						to={item.ig}
						className='footer__social-link'
						title='Нельзяграм'
					>
						<RoundGradientIcon size={46} icon={<InstagramIcon />} />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default TeamListItem
