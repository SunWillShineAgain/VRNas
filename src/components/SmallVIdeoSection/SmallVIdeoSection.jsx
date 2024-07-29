import React from 'react'
import './SmallVIdeoSection.scss'
import PlayIcon from '../../assets/Icons/PlayIcon'

/**
 * @param {string} image - thumbnail
 * @param {string} videoSrc - source video
 */
const SmallVIdeoSection = ({ image, videoSrc }) => {
	return (
		<div className='small-video-section'>
			<img src={image} alt='videothumb' />
			<PlayIcon />
		</div>
	)
}

export default SmallVIdeoSection
