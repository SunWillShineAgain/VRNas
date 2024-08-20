import { YMaps, Map } from '@pbe/react-yandex-maps'
import './MapSection.scss'

const MapSection = () => {
	return (
		<section className='map'>
			<YMaps>
				<Map
					height={470}
					width={'100%'}
					defaultState={{
						center: [-0.032636, 109.331002],
						zoom: 9,
					}}
				/>
			</YMaps>
		</section>
	)
}

export default MapSection
