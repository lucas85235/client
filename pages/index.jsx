import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Web3 = require("web3");

export default function Home() {

  // if accounts != null is logged
  // else make login in metamask

  const [accounts, setAccounts] = useState(undefined)

  useEffect(() => {
    if (accounts != undefined) {
      console.log("Já esta conectado!")
      return
    }

    getAccount().then( value => {
      console.log(value)
      if (value != undefined) {
        setAccounts(value)
      }
    })
  })

  const ethEnabled = async () => {

    if (accounts != undefined) {
      console.log("Meta mask já esta conectado!")
      return
    }

    if (window.ethereum) {

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);
      setAccounts(accounts[0])
      console.log(accounts[0])
      return true;
    }
    return false;
  }

  async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    return account
  }

  return (
    <div className={styles.container}>
      <button onClick={() => ethEnabled()}>Conectar Metamask</button>
      <div>
        Status: <span>{accounts}</span>
      </div>
    </div>
  )
}
