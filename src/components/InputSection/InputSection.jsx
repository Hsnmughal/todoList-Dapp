import React, { useState } from 'react';
import styles from './InputSection.module.css'
import style from '../../App.module.css';
import cx from 'classnames';

const InputSection = (props) => {
    let addTodo  = props.addTodo;
    const [state, setState] = useState('');
    return (
        <main>
            <div className={cx(styles.subDiv, style.container)}>
                <input type="text" className={styles.input} onChange={(e) => setState(e.target.value)}/>
                <button className={styles.add} onClick={() => addTodo(state)}>Add Todo</button>
                <button className={styles.delete}>Delete All</button>
            </div>
        </main>
    )
}

export default InputSection
