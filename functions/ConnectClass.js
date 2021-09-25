import React from "react"
import styles from '../styles/Home.module.css'

const Web3 = require("web3");

export default class ConnectClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            account: undefined,
        }

        this.getAccount = this.getAccount.bind(this)
        this.ethEnabled = this.ethEnabled.bind(this)
    }

    componentDidMount() {
        if (this.state.account != undefined) {
            console.log("Já esta conectado!")
            return
        }

        this.getAccount().then(value => {
            console.log("amount: " + value)
            if (value != undefined) {
                this.setState({ account: value })
            }
        })
    }

    ethEnabled = async () => {

        if (this.state.account != undefined) {
            console.log("Meta mask já esta conectado!")
            return
        }

        if (window.ethereum) {

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            window.web3 = new Web3(window.ethereum);
            this.setState({ account: accounts[0] })
            console.log(accounts[0])
            return true;
        }
        return false;
    }

    getAccount = async () => {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        return account
    }

    buttonRender = () => {
        if (this.state.account == undefined) {
            return <button onClick={() => this.ethEnabled()}>Conectar Metamask</button>
        }
        else {
            return <span>address: {this.state.account}</span>
        }
    }

    connectStatus = () => {
        if (this.state.account == undefined) {
            return "Not Connected"
        }
        else {
            return "Connected"
        }
    }

    render() {
        return (
            <div className={styles.container}>
                {this.buttonRender()}
                <div>
                    <span>Status: {this.connectStatus()}</span>
                </div>
            </div >
        )
    }
}
