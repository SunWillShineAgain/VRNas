import React from 'react'
import './SmallVIdeoSection.scss'
import PlayIcon from '../../assets/Icons/PlayIcon'

/**
 * @param {string} image - thumbnail
 * @param {string} src - source video
 */
const SmallVIdeoSection = ({ image }) => {
	return (
		<div className='small-video-section'>
			<img src={image} alt='videothumb' />
			<PlayIcon />
		</div>
	)
}

export default SmallVIdeoSection
