import React from 'react'
import TwitterIcon from '../../assets/Icons/TwitterIcon'
import FacebookIcon from '../../assets/Icons/FacebookIcon'
import InstagramIcon from '../../assets/Icons/InstagramIcon'
import { Link } from 'react-router-dom'

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
					<Link
						target='_blank'
						to={item.x}
						className='footer__social-link'
						title='Twitter'
					>
						<TwitterIcon />
					</Link>
					<Link
						target='_blank'
						to={item.fb}
						className='footer__social-link'
						title='Facebook'
					>
						<FacebookIcon />
					</Link>
					<Link
						target='_blank'
						to={item.ig}
						className='footer__social-link'
						title='Нельзяграм'
					>
						<InstagramIcon />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default TeamListItem
