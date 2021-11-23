import React from 'react';
import Identicon from 'identicon.js';
import styles from './Header.module.css';

const Header = (props) => {
    let account = props.account;
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
                            {account}
                        </p>
                    </span>
                    {account
                        ? <img
                            className={styles.avatar}
                            width='30'
                            height='30'
                            src={`data:image/png;base64,${new Identicon(account, 30).toString()}`}
                            alt=""
                        />
                        : <span></span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
