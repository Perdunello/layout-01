import styles from '../styles/Partners.module.scss'
import dubai_crypto from '../public/dubai_crypto.png'
import partner1 from '../public/partner1.png'
import partner2 from '../public/partner2.png'
import partner3 from '../public/partner3.png'
import partner4 from '../public/partner4.png'
import partner5 from '../public/partner5.png'
import partner6 from '../public/partner6.png'
import partner7 from '../public/partner7.png'
import partner8 from '../public/partner8.png'

const Partners = () => {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.mainPartner}>
                <img src={dubai_crypto} alt="dubai crypto"/>
            </div>
            <div>
                <div className={styles.titlePartners}>Наши партнеры</div>
                <ul className={styles.partners}>
                    <li><img src={partner1} alt=""/></li>
                    <li><img src={partner2} alt=""/></li>
                    <li><img src={partner3} alt=""/></li>
                    <li><img src={partner4} alt=""/></li>
                    <li><img src={partner5} alt=""/></li>
                    <li><img src={partner6} alt=""/></li>
                    <li><img src={partner7} alt=""/></li>
                    <li><img src={partner8} alt=""/></li>
                </ul>
            </div>
        </div>
    )
}
export default Partners