import React from 'react'
import './Articles.scss'
import Button from '../../components/Button/Button'
import ArticleList from '../../components/ArticleList/ArticleList'
import ArticleSlider from '../../components/ArticleSlider/ArticleSlider'

const recentArticles = [
	{
		image: 'images/article-1.png',
		tag: 'VR Education',
		title: 'How VR is Revolutionizing the Classroom',
	},
	{
		image: 'images/article-2.png',
		tag: 'VR Architecture',
		title: 'Exploring New Worlds: The Benefits of VR Travel',
	},
	{
		image: 'images/article-3.png',
		tag: 'VR Education',
		title: 'The Future of Education: How VR is Revolutionizing the Classroom',
	},
	{
		image: 'images/article-4.png',
		tag: 'VR Entertainment',
		title:
			'Making Events Memorable: The Power of VR for Corporate and Special Occasions',
	},
	{
		image: 'images/article-1.png',
		tag: 'VR Event',
		title: 'Exploring New Worlds: The Benefits of VR Travel',
	},
	{
		image: 'images/article-2.png',
		tag: 'VR Education',
		title: 'The Future of Education: How VR is Revolutionizing the Classroom',
	},
	{
		image: 'images/article-3.png',
		tag: 'VR Entertainment',
		title:
			'Making Events Memorable: The Power of VR for Corporate and Special Occasions',
	},
]

const popularArticles = [
	{
		image: 'images/article-slider-1.png',
		tag: 'VR Games',
		title: 'Entertainment Goes Virtual: The Rise of VR Gaming',
	},
	{
		image: 'images/article-slider-2.png',
		tag: 'VR Architecture',
		title: 'The Future of Education: How VR is Revolutionizing the Classroom',
	},
	{
		image: 'images/article-slider-3.png',
		tag: 'VR Education',
		title: 'Entertainment Goes Virtual: The Rise of VR Gaming',
	},
	{
		image: 'images/article-slider-4.png',
		tag: 'VR Entertainment',
		title: 'Bringing Designs to Life: How VR is Changing Architecture',
	},
]

const Articles = () => {
	return (
		<section className='articles'>
			<div className='articles__top'>
				<div className='articles__text'>
					<div className='gradient-caption'>OUR ARTICLES</div>
					<h2 className='heading-h2'>Stay Up-to-Date with Our VR Insights</h2>
				</div>
				<Button text='SEE ALL' variant='bold' />
			</div>
			<div className='articles__bottom'>
				<div className='articles__popular gradient-bg'>
					<div className='articles__title'>Popular Article</div>
					<ArticleSlider data={popularArticles} />
				</div>
				<div className='articles__recent'>
					<div className='articles__title'>Recent Article</div>
					<ArticleList data={recentArticles} />
				</div>
			</div>
		</section>
	)
}

export default Articles
