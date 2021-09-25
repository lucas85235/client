import React, { useEffect, useState } from 'react'
import ConnectFunction from '../functions/ConnectFunction';
import { Token } from '../functions/Contract';
import styles from '../styles/Home.module.css'

const Web3 = require("web3");

export default function Home() {
  
  const [supply, setSupply] = useState(0)

  async function totalSupply() {

    Token.methods.totalSupply().call().then(function(v) {
      var form = v / 1000000000000000000
      setSupply(form)
      console.log(form)
    })

  }
  
  return (
    <div>
      <ConnectFunction onConnect={() => totalSupply()}></ConnectFunction>
      <div className={styles.container}>
        <div className={styles.item}>
          <span>Total de Moedas</span>
          <span>{supply}</span>
          <button onClick={() => totalSupply()}>Atualizar</button>  
        </div>
      </div>
    </div>
  )
}
