import React from 'react'
import './BigVideoSection.scss'
import Tag from '../Tag/Tag'
import PlayIconFilled from '../../assets/Icons/PlayIconFilled'

const BigVideoSection = ({ title, tag, videoSrc, thumbnail }) => {
	return (
		<div className='video'>
			<div className='gradient-bg'></div>
			<div className='video__info'>
				<Tag text={tag} />
				<div className='video__title'>{title}</div>
			</div>
			<img src={thumbnail} alt={title} />
			<div className='video__play-button'>
				<PlayIconFilled />
			</div>
		</div>
	)
}

export default BigVideoSection
