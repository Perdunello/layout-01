import styles from '../styles/News.module.scss'
import calendarIcon from "../public/calendarIcon.svg";
import video from '../public/video.svg'

const News = () => {
    return (
        <div className={styles.newsWrapper}>
            <div className={styles.mainTitleNewsWrapper}>
                <div>НОВОСТИ СЕРВИСА</div>
                <div>ВСЕ НОВОСТИ</div>
            </div>
            <div>
                <ul className={styles.newsList}>
                    <li>
                        <div className={styles.titleNews}>Как оплатить OVH, Hetzner, Digital Ocean в текущих условиях
                        </div>
                        <div className={styles.textNews}>Рассмотрим алгоритм оплаты серверов и доменов за рубежом в
                            условиях войны.
                        </div>
                        <div className={styles.dateWithIcon}><img src={calendarIcon} alt=""/>
                            <div>19.03.2022 в 14:46</div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.titleNews}>Отключение SWIFT, Visa и MasterCard в Беларуси</div>
                        <div className={styles.textNews}>Как вывести криптовалюты на карту в Беларуси в текущей
                            ситуации
                        </div>
                        <div className={styles.dateWithIcon}><img src={calendarIcon} alt=""/>
                            <div>19.03.2022 в 14:46</div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.titleNews}>Офис в Израиле</div>
                        <div className={styles.textNews}>Сообщаем об открытии представительства в Тель-Авиве, Израиль.
                            Доступны все направления
                            обмена.
                        </div>
                        <div className={styles.dateWithIcon}><img src={calendarIcon} alt=""/>
                            <div>19.03.2022 в 14:46</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <ul className={styles.radioNewsWrapper}>
                    <li><input type="radio" id='radio1' name='radio' defaultChecked/>
                        <label htmlFor="radio1"/></li>
                    <li><input type="radio" id='radio2' name='radio'/>
                        <label htmlFor="radio2"/></li>
                    <li><input type="radio" id='radio3' name='radio'/>
                        <label htmlFor="radio3"/></li>
                </ul>
            </div>
            <div className={styles.videoWrapper}>
                <img src={video} alt=""/>
            </div>
        </div>
    )
}
export default News