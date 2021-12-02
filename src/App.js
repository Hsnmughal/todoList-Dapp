import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import Todo from './abis/Todo.json';
import { Header, InputSection, TodoMapTemp } from './components';
import Web3 from 'web3';

function App() {

  // STATES
  let [account, setAccount] = useState('');
  // let [todo, setTodo] = useState('');
  let [contract, setContract] = useState({});
  let [btnState, setBtnState] = useState(false);
  let [data, setData] = useState({});


  // FUNCTIONS
  useEffect(() => {
    if (btnState) {
      loadBlockChainData();
    }
  }, [btnState])

  const loadBlockChainData = async () => {
    // Getting WEB3
    const web3 = window.web3;

    // FETCHING USER ACCOUNT
    const accounts = await web3.eth.getAccounts();
    setAccount(account = accounts[0])
    console.log(account)

    // SETTING THE CONTRACT
    const networkId = await web3.eth.net.getId();
    const contractData = await Todo.networks[networkId];

    if (contractData) {
      const contractCreation = new web3.eth.Contract(Todo.abi, contractData.address);
      setContract(contract = contractCreation)
      console.log(await contractCreation.methods.taskCount().call())
      await console.log(contract);
    } else {
      console.log('The contract is not deployed to Etherium Network.')
    }
  }

  const loadWeb3 = async () => {
    try {
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
    } catch (e) {
      console.log(e)
    }
  }

  const addTodo = async (todo) => {
    try {
      await contract.methods.createTask(todo).send({ from: account }).on('transactionHash', Hash => {
        console.log(Hash);
      })
      // console.log(value.toString())
      // await console.log(contract.methods.taskCount.toString())

    } catch (e) {
      console.log(e)
    }
  }


  return (
    <div className={style.App}>
      <Header account={account} loadWeb3={loadWeb3} setBtnState={setBtnState}/>
      <div className={style.rest}>
        <InputSection addTodo={addTodo} />
        <TodoMapTemp />
        <TodoMapTemp />
        <TodoMapTemp />
      </div>
    </div>
  );
}

export default App;
