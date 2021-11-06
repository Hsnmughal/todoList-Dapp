import React, { useEffect , useState } from 'react';
import style from './App.module.css';
import { Header, InputSection } from './components';
import Web3 from 'web3';

function App() {

  // STATES
  let [account, setAccount] = useState('');

  // FUNCTIONS
  useEffect(() => {
    loadWeb3();
    loadBlockChainData();
    // console.log(window.web3)
  }, [])

  const loadBlockChainData = async () => {
    // Getting WEB3
    const web3 = window.web3;

    // FETCHING USER ACCOUNT
    const accounts = await web3.eth.getAccounts();
    setAccount(account = accounts[0])
    console.log(account)
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
    <div className={style.App}>
      <Header account={account}/>
      <div className={style.rest}>
        <InputSection />
      </div>
    </div>
  );
}

export default App;
