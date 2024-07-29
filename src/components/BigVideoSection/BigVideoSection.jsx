import React, { useState } from 'react'
import './BigVideoSection.scss'
import Tag from '../Tag/Tag'
import PlayIconFilled from '../../assets/Icons/PlayIconFilled'

const BigVideoSection = ({ title, tag, videoSrc, thumbnail }) => {
	const [play, setPlay] = useState(false)

	const playVideo = () => {
		setPlay(true)
		console.log('RickRolled =)')
	}

	const path = videoSrc.split('v=')[1].split('&')[0]

	return (
		<div className='video'>
			<div className='gradient-bg'></div>
			<div className='video__info'>
				<Tag text={tag} />
				<div className='video__title'>{title}</div>
			</div>
			<img src={thumbnail} alt={title} />
			<div className='video__play-button' onClick={playVideo}>
				<PlayIconFilled />
			</div>
			{play && (
				<iframe
					src={`https://www.youtube.com/embed/${path}?autoplay=1`}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
				></iframe>
			)}
		</div>
	)
}
export default BigVideoSection
