import { geolocation } from '@/features/geolocation'
import { getWeather } from '@/features/getWeather'
import { useDebounce } from '@/hooks/useDebounce'
import { useTanstackQuery } from '@/hooks/useTanstackQuery'
import { haveGeoStore } from '@/store/haveGeo'
import { latitudeStore } from '@/store/latitude'
import { longitudeStore } from '@/store/longitude'
import { Search } from '@/widgets/search/Search'
import { SideBar } from '@/widgets/sidebar/SideBar'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import s from './ui/home.module.scss'
import humidityImg from '/humidity.png'
import windyImg from '/windy.png'

export const Home = observer(() => {
	const {
		haveGeo: { haveGeo },
	} = haveGeoStore
	const {
		latitude: { latitude },
	} = latitudeStore
	const {
		longitude: { longitude },
	} = longitudeStore

	const [inpValue, setInpValue] = useState<string>('Moscow')
	const debouncedInput = useDebounce(inpValue, 500)

	const { data, isLoading, error } = useTanstackQuery(getWeather, inpValue, [
		'weather',
		debouncedInput,
		latitude,
		longitude,
	])

	useEffect(() => {
		geolocation()
	}, [])

	useEffect(() => {
		if (haveGeo) setInpValue('')
	}, [haveGeo])

	// Проверяем, что data существует, прежде чем деструктурировать

	if (isLoading) {
		return <div>Загрузка...</div>
	}

	if (error) {
		return <div>Ошибка: {error.message}</div>
	}

	if (!data) {
		return <div>Данные не найдены</div>
	}

	const current = data?.current || {}
	const location = data?.location || {}

	return (
		<section className={`${s.home_page} container`}>
			<Search inpValue={inpValue} setInpValue={setInpValue} />

			<section className={s.home_page_wrapper}>
				<SideBar />

				<section className={s.main_info}>
					<section className={s.main_info_inner}>
						<h3 className={s.city}>
							{inpValue.length || haveGeo
								? location?.name
								: 'Ничего не найдено'}
						</h3>

						<p className={s.temperature}>{current?.temp_c}&deg;C</p>
					</section>

					<section className={s.cards}>
						<article className={s.card}>
							<img src={humidityImg} alt='humidity' />

							<h3>{current?.humidity}%</h3>
						</article>

						<article className={s.card}>
							<img
								src={current?.condition?.icon}
								alt={current?.condition?.text}
							/>
							<p>погода</p>
						</article>

						<article className={s.card}>
							<img src={windyImg} alt='speed windy' />
							<p>{current?.wind_mph}mph</p>
						</article>
					</section>
				</section>
			</section>
		</section>
	)
})
