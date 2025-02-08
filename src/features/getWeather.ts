import { IWeather } from '@/hooks/useTanstackQuery'
import { haveGeoStore } from '@/store/haveGeo'
import { latitudeStore } from '@/store/latitude'
import { longitudeStore } from '@/store/longitude'

export const getWeather = async (city: string) => {
	const {
		haveGeo: { haveGeo },
	} = haveGeoStore

	const {
		latitude: { latitude },
	} = latitudeStore
	const {
		longitude: { longitude },
	} = longitudeStore

	let URL = `${import.meta.env.VITE_API_URL}`

	try {
		if (haveGeo) {
			URL += `&q=${latitude},${longitude}`
		} else {
			URL += `&q=${city}`
		}

		const response = await fetch(URL)

		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`)
		}

		const data: IWeather = await response.json()
		return data
	} catch (error) {
		console.error('ERROR', error)
		throw error
	}
}
