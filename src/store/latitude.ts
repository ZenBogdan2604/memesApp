import { makeAutoObservable } from 'mobx'
import { mobxState } from 'mobx-toolbox'

class Latitude {
	constructor() {
		makeAutoObservable(this)
	}

	latitude = mobxState(0)('latitude')
}

export const latitudeStore = new Latitude()
