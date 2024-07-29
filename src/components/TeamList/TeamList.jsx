import React from 'react'
import './TeamList.scss'
import TeamListItem from './TeamListItem'

const TeamList = ({ data }) => {
	return (
		<div className='team__list'>
			{data.map((item, i) => {
				return <TeamListItem key={i} item={item} />
			})}
		</div>
	)
}

export default TeamList
