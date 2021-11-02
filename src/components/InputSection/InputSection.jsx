import React from 'react';
import styles from './InputSection.module.css'

const InputSection = () => {
    return (
        <main>
            <div className={styles.subDiv}>
                <input type="text" className={styles.input}/>
                <button className={styles.add}>Add Todo</button>
                <button className={styles.delete}>Delete All</button>
            </div>
        </main>
    )
}

export default InputSection
