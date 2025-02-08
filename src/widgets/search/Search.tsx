import { ChangeEvent } from 'react'
import s from './ui/search.module.scss'

interface ISearch {
	inpValue: string
	setInpValue: (e: string) => void
}

export const Search = ({ inpValue, setInpValue }: ISearch) => {
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setInpValue(e.target.value)
	}

	return (
		<div className={s.search}>
			<input
				className={s.search_input}
				type='text'
				placeholder='Search...'
				value={inpValue}
				onChange={(e) => handleSearch(e)}
			/>
		</div>
	)
}
