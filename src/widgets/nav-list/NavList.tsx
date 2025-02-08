import { NavLink } from 'react-router'
import s from './ui/nav-list.module.scss'

export const NavList = () => {
	return (
		<nav>
			<ul className={s.nav_list}>
				<li>
					<NavLink to={'/'} className={s.nav_list__link}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to={'about-us'} className={s.nav_list__link}>
						About us
					</NavLink>
				</li>
				<li>
					<NavLink to={'mems'} className={s.nav_list__link}>
						Mems
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
