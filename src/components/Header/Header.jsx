import React from 'react';
import Identicon from 'identicon.js';
import styles from './Header.module.css';
import style from '../../App.module.css';
import cx from 'classnames';

const Header = (props) => {
    let { account , loadWeb3 , setBtnState } = props;
    return (
        <div className={styles.headerDiv}>
            <div className={cx(styles.subDiv, style.container)}>
                <div className={styles.logoDiv}>
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
                        : <span>
                            <button onClick={()=> {
                                loadWeb3()
                                setBtnState(true)
                                }} className={styles.walletBtn}>
                                Connect Wallet
                            </button>
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
