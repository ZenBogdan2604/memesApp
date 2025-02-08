import { makeAutoObservable } from 'mobx'
import { mobxState } from 'mobx-toolbox'

class HaveGeo {
	constructor() {
		makeAutoObservable(this)
	}

	haveGeo = mobxState(false)('haveGeo')
}

export const haveGeoStore = new HaveGeo()
