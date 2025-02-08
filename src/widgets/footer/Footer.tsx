import { NavList } from '../nav-list/NavList'
import s from './ui/footer.module.scss'

export const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={`container ${s.wrapper}`}>
				<div className={s.logo}>
					<p>logo</p>
				</div>

				<NavList />
			</div>
		</footer>
	)
}
