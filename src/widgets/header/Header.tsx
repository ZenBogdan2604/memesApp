import { NavList } from '../nav-list/NavList'
import s from './ui/header.module.scss'
import logo from '/logo.png'

export const Header = () => {
	return (
		<header className={s.header}>
			<div className={`container ${s.wrapper}`}>
				<div><img className={s.logo} src={logo} alt="logo" /></div>

				<NavList />

				<div className={s.user}>
					<div className={s.info_user}>
						<p className={s.username}>artbog</p>
						<p className={s.email}>artgod@gmail.com</p>
					</div>

					<div className='avatar'>avatar</div>
				</div>
			</div>
		</header>
	)
}
