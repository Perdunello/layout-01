import styles from '../styles/Header.module.scss'
import {NavLink} from "react-router-dom";
import clock from '../public/clock.svg'
import arrow from '../public/arrow.svg'
import logo from '../public/Logos.png'
import whatsapp from '../public/whatsapp.svg'
import telegram from '../public/telegram.svg'
import viber from '../public/viber.svg'
import cross from '../public/cross.svg'

const Header = () => {
    return <div className={styles.mainWrapper}>
        <div className={styles.topHeaderWrapper}>
            <div className={styles.flags}>
                <div className={styles.language}>234</div>
                <img src={arrow} alt="arrow"/>
            </div>
            <nav className={styles.navWrapper}>
                <ul className={styles.navList}>
                    <li><span className={styles.square}></span><NavLink to='/rate'
                                                                        className={styles.navItem}>Главная</NavLink>
                    </li>
                    <li><span className={styles.square}></span><NavLink to='/rate'
                                                                        className={styles.navItem}>Тарифы</NavLink></li>
                    <li><span className={styles.square}></span><NavLink to='/partners'
                                                                        className={styles.navItem}>Партнерам</NavLink>
                    </li>
                    <li><span className={styles.square}></span><NavLink to='/questions'
                                                                        className={styles.navItem}>Вопросы</NavLink>
                    </li>
                    <li><span className={styles.square}></span><NavLink to='/reviews'
                                                                        className={styles.navItem}>Отзывы</NavLink></li>
                    <li><span className={styles.square}></span><NavLink to='/contacts'
                                                                        className={styles.navItem}>Контакты</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.time}>
                <img src={clock} alt="clock"/>
                <div style={{fontWeight: 400}}>График работы: <span className={styles.time__work}>С 10-20 ПН-ВС</span>
                </div>
            </div>
        </div>
        <div className={styles.bottomHeaderWrapper}>
            <div>
                <img src={logo} alt="logo Bitok.me"/>
            </div>
            <form action="post" className={styles.formLogin}>
                <input className={[styles.baseInput, styles.inputLogin].join(' ')} type="text" name={'text'}
                       placeholder={'Login'}/>
                <input className={[styles.baseInput, styles.inputPassword].join(' ')} type="password"
                       name='password' placeholder={'***********'}/>
                <button className={styles.buttonEnter}>Войти</button>
                <button className={styles.buttonRegistration}>Регистрация</button>
            </form>
            <div>
                <ul className={styles.socLinks}>
                    <li><img src={whatsapp} alt="whatsapp icon"/></li>
                    <li><img src={telegram} alt="telegram icon"/></li>
                    <li><img src={viber} alt="viber icon"/></li>
                </ul>
            </div>
        </div>
        <div className={styles.warning}>Внимание! Уважаемые пользовател, в связи с текущей ситуацией в мире вывод Qiwi
            на кошельки +380 невозможен, приносим извинения за доставленные неудобства <img
                src={cross} alt=""/>
        </div>
    </div>
}
export default Header