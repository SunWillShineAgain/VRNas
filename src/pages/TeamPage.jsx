import React from 'react'
import PageLayout from '../layout/PageLayout'
import Subscribe from '../sections/Subscribe/Subscribe'
import Facts from '../sections/Facts/Facts'
import Team from '../sections/Team/Team'

const facts = [
	{
		text: 'HAPPY CLIENTS',
		value: '123k+',
	},
	{
		text: 'PROJECT COMPLETE',
		value: '300k+',
	},
	{
		text: 'YEARS EXPERIENCE',
		value: '10+',
	},
]

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
	{
		image: 'images/team-5.png',
		name: 'Aril Laso',
		role: 'UI / UX Designer',
		ig: 'https://instagram.com',
		fb: 'https://facebook.com',
		x: 'https://x.com',
	},
	{
		image: 'images/team-6.png',
		name: 'Beni Barak',
		role: '3D Artist',
		ig: 'https://instagram.com',
		fb: 'https://facebook.com',
		x: 'https://x.com',
	},
]

const TeamPage = () => {
	return (
		<PageLayout title='Our Team' cls='team'>
			<Team team={teamItems} noBtn />
			<Facts data={facts} />
			<Subscribe />
		</PageLayout>
	)
}

export default TeamPage
