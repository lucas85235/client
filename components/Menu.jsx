import styles from '../styles/Home.module.css'

const Web3 = require("web3");

export default function Menu() {

    return (
        <div className={styles.menu}>
            <a href="/">
                <button>Home</button>
            </a>
            <a href="/SimpleNft">
                <button>Simple Nft</button>
            </a>
        </div >
    )
}
