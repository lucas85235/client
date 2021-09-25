import React, { useEffect, useState } from "react"
import styles from '../styles/Home.module.css'

const Web3 = require("web3");

export default function ConnectFunction(props) {

    const [account, setAccount] = useState(undefined)

    useEffect(() => {
        if (account != undefined) {
            console.log("Já esta conectado!")
            return
        }

        getAccount().then(value => {
            console.log("amount: " + value)
            if (value != undefined) {
                setAccount(value)
                props.onConnect()
            }
        })
    })

    const ethEnabled = async () => {

        if (account != undefined) {
            console.log("Meta mask já esta conectado!")
            return
        }

        if (window.ethereum) {

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            window.web3 = new Web3(window.ethereum);
            setAccount(accounts[0])
            console.log(accounts[0])
            props.onConnect()
            return true;
        }
        return false;
    }

    const getAccount = async () => {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        return account
    }

    const renderButton = () => {
        if (account == undefined) {
            return <button onClick={() => ethEnabled()}>Conectar Metamask</button>
        } else {
            return <span>address: {account}</span>
        }
    }

    const renderConnect = () => {
        if (account == undefined) {
            return "Not Connected"
        } else {
            return "Connected"
        }
    }

    return (
        <div className={styles.header}>
            {renderButton()}
            <div>
                <span>Status: {renderConnect()}</span>
            </div>
        </div >
    )
}
