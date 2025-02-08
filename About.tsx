import s from './ui/about.module.scss'
import artgod from '/artgod.jpg'
import me from '/me.jpg'

export const About = () => {
  return (
    <section className={s.main}>
      <div className={s.main_info}>
        <div className={s.main_info_first}>
          <h1 className={s.main_info_title}>Команда воркеров</h1>
        </div>
        <div className={s.main_info_second}>
          <img className={s.main_info_img} src={artgod} alt="Артур" />
          <div className={s.main_info_text_block}>
            <h2 className={s.main_info_title}>Артур Ахметов</h2>
            <p className={s.main_info_text_block}>Главный разраб, senior, team lead, РП, декан, ГД сайта. Под его руководством стоит главная страница с погодой и слежка за поганным стажёром</p>
            <p>тг: @moonwqwizlio</p>
            <p>дс: mooonw_12299</p>
            <p>email: artgod@gmail.com</p>
          </div>
        </div>
        <div className={s.main_info_third}>
          <div className={s.main_info_text_block}>
            <h2 className={s.main_info_title}>Богдан Зенков</h2>
            <p className={s.main_info_text_block}>Глава страницы мемов и о нас. Продаст сайт за то, что бы поиграть в дбд или геншин</p>
            <p>тг: @Tami2008rus</p>
            <p>дс: tamimasabas</p>
            <p>email: zenbog2008@gmail.com</p>
          </div>
          <img className={s.main_info_img} src={me} alt="Богдан" />
        </div>
      </div>
    </section>
  )
}