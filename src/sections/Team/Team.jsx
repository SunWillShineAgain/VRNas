import React from 'react'
import './Team.scss'
import Button from '../../components/Button/Button'
import TeamList from '../../components/TeamList/TeamList'

const teamItems = [
	{
		image: 'images/team-1.png',
		name: 'Bondan Prabowo',
		role: 'CEO',
		ig: 'https://instagram.com',
		fb: 'https://facebook.com',
		x: 'https://x.com',
	},
	{
		image: 'images/team-2.png',
		name: 'Bayu Aji',
		role: 'VR Development',
		ig: 'https://instagram.com',
		fb: 'https://facebook.com',
		x: 'https://x.com',
	},
	{
		image: 'images/team-3.png',
		name: 'Agung Brandon',
		role: 'VR Artist',
		ig: 'https://instagram.com',
		fb: 'https://facebook.com',
		x: 'https://x.com',
	},
	{
		image: 'images/team-4.png',
		name: 'Aldo Boy',
		role: '3D Designer',
		ig: 'https://instagram.com',
		fb: 'https://facebook.com',
		x: 'https://x.com',
	},
]

const Team = ({ team, noBtn }) => {
	return (
		<section className='team'>
			<div className='team__top'>
				<div className='team__text'>
					<div className='gradient-caption'>OUR TEAM</div>
					<h2 className='heading-h2'>Our Professionals Team</h2>
				</div>
				{!noBtn && <Button text='SEE ALL' variant='bold' />}
			</div>
			<TeamList data={team || teamItems} />
		</section>
	)
}

export default Team
