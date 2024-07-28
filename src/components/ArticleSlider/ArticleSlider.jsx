import React from 'react'
import './ArticleSlider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Tag from '../Tag/Tag'
import ArrowNextIcon from '../../assets/Icons/ArrowNextIcon'

const ArticleSlider = ({ data }) => {
	return (
		<div className='articles__slider'>
			<Swiper
				modules={[EffectFade, Pagination]}
				effect='fade'
				spaceBetween={50}
				slidesPerView={1}
				pagination={{
					clickable: true,
				}}
				grabCursor={true}
				loop={true}
			>
				{data.map((item, i) => {
					return (
						<SwiperSlide key={i}>
							<img src={item.image} alt='' />
							<div className='articles__slider-info'>
								<Tag text={item.tag} />
								<div className='row'>
									<div className='articles__slider-title'>
										<a onClick={e => e.preventDefault()} href='#'>
											{item.title}
										</a>
									</div>
									<a
										href='#'
										onClick={e => e.preventDefault()}
										className='arrow-link'
									>
										<ArrowNextIcon />
									</a>
								</div>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default ArticleSlider
