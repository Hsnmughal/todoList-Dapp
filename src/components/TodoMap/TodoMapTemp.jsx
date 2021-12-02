import React from 'react';
import styles from './TodoMapTemp.module.css';
import style from '../../App.module.css';
import cx from  'classnames';

const TodoMapTemp = (props) => {

    return (
        <>
            <div className={cx(styles.headings, styles.headingsContainer, style.container)}>
                <div className={styles.sNoHeading}>
                    <p>
                        S.No
                    </p>
                </div>
                <div className={styles.todoHeading}>
                    <p>
                        Todo's
                    </p>
                </div>
                <div className={styles.stateHeading}>
                    <p>
                        Todo State
                    </p>
                </div>
            </div>
            <div className={cx(styles.headings, style.container, styles.data)}>
                <div className={styles.sNo}>
                    <p>
                        1
                    </p>
                </div>
                <div className={styles.todo}>
                    <p>
                        DApp
                    </p>
                </div>
                <div className={styles.state}>
                    <p>
                        False
                    </p>
                </div>
            </div>
        </>
    )
}

export default TodoMapTemp
