import React from 'react';
import styles from './TodoMapTemp.module.css';

const TodoMapTemp = () => {

    return (
        <div>
            <span>
                <p className={style.todo}>
                    This is a todo
                </p>
            </span>
            <button className={styles.edit}>
                Edit
            </button>
            <button className={styles.del}>
                Delete
            </button>
        </div>
    )
}

export default TodoMapTemp
