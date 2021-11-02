import React from 'react';
import styles from './Header.module.css';
import style from '../../App.module.css';

const Header = () => {
    return (
        <div className={styles.headerDiv}>
            <div className={styles.subDiv}>
                <div>
                    <p className={styles.logo}>
                        Todo Dapp
                    </p>
                </div>
                <div className={styles.secDiv}>
                    <span>
                        <p className={styles.account}>
                            0x1F1F75735a49f5f7e7454B96ff876A2804Ce1438
                        </p>
                    </span>
                    <span className={styles.avatar}>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
