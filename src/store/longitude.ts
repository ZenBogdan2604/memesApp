import { makeAutoObservable } from 'mobx'
import { mobxState } from 'mobx-toolbox'

class Longitude {
	constructor() {
		makeAutoObservable(this)
	}

	longitude = mobxState(0)('longitude')
}

export const longitudeStore = new Longitude()
