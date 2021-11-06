import React, { useEffect , useState } from 'react';
import styles from './TodoMapTemp.module.css';

const TodoMapTemp = () => {

    // STATES
    const [account, setAccount] = useState('');

    // FUNCTIONS
    useEffect(() => {
        loadWeb3();
        loadBlockChainData();
        console.log(window.web3)
    }, [])

    const loadBlockChainData = async () => {
        // Getting WEB3
        const web3 = window.web3;

        // FETCHING USER ACCOUNT
        const accounts = await web3.eth.getAccounts();
        setAccount(account = accounts[0])

    }

    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

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
