import React from 'react';
import styles from './TodoMapTemp.module.css';
import cx from  'classnames';

const TodoMapTemp = (props) => {

    return (
        <>
            <div className={cx(styles.headings, styles.headingsContainer)}>
                <div className={styles.sNoheading}>
                    <p>
                        S.No
                    </p>
                </div>
                <div className={styles.todoheading}>
                    <p>
                        Todo's
                    </p>
                </div>
                <div className={styles.stateheading}>
                    <p>
                        Todo State
                    </p>
                </div>
            </div>
            <div className={styles.headings}>
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
