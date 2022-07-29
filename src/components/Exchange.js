import styles from '../styles/Exchange.module.scss'
import giveIcon from "../public/giveIcon.svg";
import searchIcon from "../public/searchIcon.svg";
import ethereum from "../public/ethereum.svg";
import bitcoin from "../public/bitcoin.svg";
import tether from "../public/tether.svg";
import dogecoin from "../public/dogecoin.svg";
import litecoin from "../public/litecoin.svg";
import takeIcon from "../public/takeIcon.svg";
import fillFormIcon from "../public/fillFormIcon.svg";
import list_alt from "../public/list_alt.svg";

const Exchange = () => {
    return (
        <div>
            <div className={styles.changeWrapper}>
                <div className={styles.changeBlock}>
                    <div className={styles.nameFormWithIcon}>
                        <div className={styles.nameForm}>1.ОТДАЕТЕ</div>
                        <img src={giveIcon} alt=""/>
                    </div>
                    <div>
                        <div className={styles.currencyWrapper}>
                            <input type="number" placeholder={100}
                                   className={[styles.baseCurrency, styles.currencyGive].join(' ')}/>
                        </div>
                    </div>
                    <div>
                        <ul className={styles.typeCurrencyWrapper}>
                            <li>Все</li>
                            <li>Фиат</li>
                            <li>Крипта</li>
                            <li>Эпс</li>
                            <li><img src={searchIcon} alt=""/></li>
                        </ul>
                    </div>
                    <div className={styles.currencyType}>
                        Фиат
                    </div>
                    <div>
                        <ul className={styles.typeWrapper}>
                            <li><img src={ethereum} alt="Ethereum"/>
                                Ethereum ETH
                            </li>
                            <li><img src={bitcoin} alt="Bitcoin"/>
                                Bitcoin BTC
                            </li>
                            <li><img src={tether} alt="Tether"/>
                                Tether TRC20 USDT
                            </li>
                            <li><img src={tether} alt="Tether"/>
                                Tether TRC20 USDT
                            </li>
                            <li><img src={dogecoin} alt="Dogecoin"/>
                                Dogecoin DOGE
                            </li>
                        </ul>
                    </div>
                    <div className={styles.currencyType}>
                        Крипта
                    </div>
                    <ul className={styles.typeWrapper}>
                        <li><img src={dogecoin} alt="dogecoin"/>
                            Dogecoin DOGE
                        </li>
                        <li><img src={litecoin} alt="litecoin"/>
                            Litecoin LTC
                        </li>
                        <li><img src={litecoin} alt="litecoin"/>
                            Litecoin LTC
                        </li>
                        <li><img src={litecoin} alt="litecoin"/>
                            Litecoin LTC
                        </li>
                    </ul>
                </div>
                <div className={styles.changeBlock}>
                    <div className={styles.nameFormWithIcon}>
                        <div className={styles.nameForm}>2.ПОЛУЧАЕТЕ</div>
                        <img src={takeIcon} alt=""/>
                    </div>
                    <div>
                        <div className={styles.currencyWrapper}>
                            <input type="number" placeholder={100}
                                   className={[styles.baseCurrency, styles.currencyTake].join(' ')}/>
                        </div>
                    </div>
                    <div className={styles.searchWrapper}>
                        <input type="search"/>
                    </div>
                    <div className={styles.currencyType}>
                        Фиат
                    </div>
                    <div>
                        <ul className={styles.typeWrapper}>
                            <li className={styles.currencyWithCost}>
                                <img src={ethereum} alt="Ethereum"/>
                                Ethereum ETH
                            </li>
                            <li><img src={bitcoin} alt="Bitcoin"/>
                                Bitcoin BTC
                            </li>
                            <li><img src={tether} alt="Tether"/>
                                Tether TRC20 USDT
                            </li>
                            <li><img src={tether} alt="Tether"/>
                                Tether TRC20 USDT
                            </li>
                            <li><img src={dogecoin} alt="Dogecoin"/>
                                Dogecoin DOGE
                            </li>
                            <li><img src={dogecoin} alt="Dogecoin"/>
                                Dogecoin DOGE
                            </li>
                        </ul>
                    </div>
                    <div className={styles.currencyType}>
                        Крипта
                    </div>
                    <ul className={styles.typeWrapper}>
                        <li><img src={litecoin} alt="litecoin"/>
                            Litecoin LTC
                        </li>
                        <li><img src={litecoin} alt="litecoin"/>
                            Litecoin LTC
                        </li>
                        <li><img src={litecoin} alt="litecoin"/>
                            Litecoin LTC
                        </li>
                    </ul>
                </div>
                <div  className={styles.changeBlock}>
                    <div className={styles.nameFormWithIcon}>
                        <div className={styles.nameForm}>3.ЗАПОЛНИТЕ ФОРМУ</div>
                        <img src={fillFormIcon} alt=""/>
                    </div>
                    <div>
                        <ul className={styles.fillFormWrapper}>
                            <li>
                                <div>Ваш курс:</div>
                                <div>1 BTC = 29103.1 USD</div>
                            </li>
                            <li>
                                <div>Комиссия:</div>
                                <div>2% <img src={list_alt} alt="list_alt"/></div>
                            </li>
                            <li>
                                <div>Резерв:</div>
                                <div>1222306.39 USD</div>
                            </li>
                            <li>
                                <div>Минимум:</div>
                                <div>300 USD</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <form action="post" className={styles.mainForm}>
                            <input className={styles.mainFormItem} type="text" name='geo' placeholder={'Kyiv'}/>
                            <input className={styles.mainFormItem} type="email" name='email'
                                   placeholder={'example@gmail.com'}/>
                            <input className={styles.mainFormItem} type="tel" name='phone'
                                   placeholder={'Номер телефона'}/>
                            <input className={[styles.mainFormItem, styles.error].join(' ')} type="number" name='wallet'
                                   placeholder={'Номер кошелька'}/>
                            <input className={styles.mainFormItem} type="text" name='comment'
                                   placeholder={'Комментарий'}/>
                            <input className={styles.mainFormItem} type="text" name='fullname'
                                   placeholder={'Имя Фамилия'}/>
                            <input className={styles.mainFormItem} type="text" name='giftcard'
                                   placeholder={'Купон на скидку'}/>
                            <div className={styles.checkboxWrapper}>
                                <input type="checkbox"/>
                                <div>С правилами сервиса ознакомлен и согласен</div>
                            </div>
                            <button>Обменять сейчас</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.mainInfoWrapper}>
                <ul className={styles.mainInfoList}>
                    <li>
                        <span>365</span>
                        <span>Дней в году, без выходных</span>
                    </li>
                    <li>
                        <span>3000+</span>
                        <span>Сделок за год</span>
                    </li>
                    <li>
                        <span>7мин.</span>
                        <span>Среднее время обмена</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Exchange