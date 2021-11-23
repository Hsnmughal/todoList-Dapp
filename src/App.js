import React, { useEffect , useState } from 'react';
import style from './App.module.css';
import Todo from './abis/Todo.json';
import { Header, InputSection } from './components';
import Web3 from 'web3';

function App() {

  // STATES
  let [account, setAccount] = useState('');
  // let [todo, setTodo] = useState('');
  let [contract, setContract] = useState({});
  let [data, setData] = useState({});
  

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

    // SETTING THE CONTRACT
    const networkId = await web3.eth.net.getId();
    const contractData = await Todo.networks[networkId];

    if (contractData) {
        const contractCreation = new web3.eth.Contract(Todo.abi, contractData.address);
        setContract(contract = contractCreation)
        await console.log(contract);
    } else {
      console.log('The contract is not deployed to Etherium Network.')
    }
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

  const addTodo = async (todo) => {
    // await contract.methods.createTask(todo).on('transactionHash', Hash => {
    //   console.log(Hash)
    //   window.location.reload();
    // })

    await console.log(contract.methods.taskCount())
  
  }


  return (
    <div className={style.App}>
      <Header account={account}/>
      <div className={style.rest}>
        <InputSection addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
