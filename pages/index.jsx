import React, { useEffect, useState } from 'react'

import { SimpleNft } from '../functions/SimpleNftContract';
import AccountSupply from '../components/AccountSupply';
import ConnectFunction from '../components/ConnectFunction';
import NftImages from '../components/NftImages';
import Menu from '../components/Menu';
import styles from '../styles/Home.module.css'

const Web3 = require("web3");

export default function Home() {
  return (
    <div>
      <ConnectFunction/>
      <Menu/>
]    </div>
  )
}
