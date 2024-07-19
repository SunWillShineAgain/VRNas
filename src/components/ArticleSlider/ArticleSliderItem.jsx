import React from 'react'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'

const ArticleSliderItem = ({ item }) => {
	return <SwiperSlide>Slide {item.title}</SwiperSlide>
}

export default ArticleSliderItem
