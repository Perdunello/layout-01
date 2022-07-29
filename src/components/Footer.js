import styles from '../styles/Footer.module.scss'
import logo from '../public/Logos.png'
import whatsapp from '../public/whatsapp_black.svg'
import telegram from '../public/telegram_black.svg'
import viber from '../public/viber_black.svg'

const Footer = () => {
    return (
        <div className={styles.mainWrapper}>
            <div><img src={logo} alt=""/></div>
            <div>
                <ul>
                    <li>Тарифы</li>
                    <li>Партнерам</li>
                    <li>Вопросы</li>
                    <li>Отзывы</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Правила обмена</li>
                    <li>AML/KYC</li>
                    <li>Cookies</li>
                    <li>Резервы</li>
                    <li>Для компаний</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Как купить биткоин</li>
                    <li>Как продать биткоин</li>
                    <li>Недвижимость за криптовалюты</li>
                </ul>
            </div>
            <div>
                <ul className={styles.socLinks}>
                    <li><img src={whatsapp} alt=""/></li>
                    <li><img src={telegram} alt=""/></li>
                    <li><img src={viber} alt=""/></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer