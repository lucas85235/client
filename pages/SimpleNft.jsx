import AccountSupply from '../components/AccountSupply';
import ConnectFunction from '../components/ConnectFunction';
import NftImages from '../components/NftImages';
import Menu from '../components/Menu';
import styles from '../styles/Home.module.css'

const Web3 = require("web3");

export default function SimpleNft() {
  return (
    <div>
      <ConnectFunction onConnect={() => { }}></ConnectFunction>
      <Menu/>
      <div className={styles.list}>
        <AccountSupply />
        <NftImages />
      </div>
    </div>
  )
}
