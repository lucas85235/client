import { useState } from 'react';
import { SimpleNft } from '../functions/SimpleNftContract';
import styles from '../styles/Home.module.css'

export default function AccountSupply() {

    const [supply, setSupply] = useState(0)
    const [nft, setNft] = useState(0)

    async function totalSupply() {
      await SimpleNft.methods.tokenCounter().call().then(function (v) {
        setSupply(v)
      })
    }
  
    async function mySupply() {
      await SimpleNft.methods.balanceOf("0x8B1BE98F7CAE0FFcCf314331f86e8b2772bdBC1a").call().then(function (v) {
        setNft(v)
      })
    }

    return (
        <div>
            <div className={styles.item}>
                <span>Total de NFT's</span>
                <span>{supply}</span>
                <button onClick={() => totalSupply()}>Atualizar</button>
            </div>
            <div className={styles.item}>
                <span>Meus NFT's</span>
                <span>{nft}</span>
                <button onClick={() => mySupply()}>Atualizar</button>
            </div>
        </div>
    )
}