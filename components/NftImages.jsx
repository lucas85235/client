import { useEffect, useState } from 'react';
import { SimpleNft } from '../functions/SimpleNftContract';
import styles from '../styles/Home.module.css'

export default function AccountSupply() {

    const [nftList, setNftList] = useState([])
    const [uriList, setUriList] = useState([])
  
    // GET COLLECTIBLES
  
    async function getCollectibles() {
      await SimpleNft.methods.getCollectibles("0x8B1BE98F7CAE0FFcCf314331f86e8b2772bdBC1a").call().then(function (v) {
        if (nftList != v) {
          setNftList(v)
        }
      })
    }
  
    function renderCollectiblesList() {
      return (
        <div>
          {nftList.map(function(element, id) {
            return <li key={id}>{element}</li>
          })}
        </div>
      )
    }
  
    // GET URI
  
    async function setAllCollectibleURI() {
  
      if (nftList.length == 0) {
        await getCollectibles()
      }
  
      var tempArray = []
  
      await nftList.forEach(element => {
        SimpleNft.methods.tokenURI(element).call().then(function (v) {
          tempArray = [...tempArray, v]
          setUriList(tempArray)
        })
      });
    }

    // RENDER URI
  
    function renderCollectiblesUriList() {
      return (
        <div>
          {uriList.map(function(element, id) {
            return <li key={id}>{element.slice(-10)}</li>
          })}
        </div>
      )
    }
  
    function renderCollectiblesImages() {
      return (
        <div>
          {uriList.map(function(element, id) {
            return <img key={id} className={styles.item} src={`https://ipfs.io/ipfs/${element}`} alt="" />
          })}
        </div>
      )
    }

    return (
        <div className={styles.nft}>
            <div>
                <div className={styles.item}>
                    <span>Meus NFT's</span>
                    {renderCollectiblesList()}
                    <button onClick={() => getCollectibles()}>Atualizar</button>
                </div>
                <div className={styles.item}>
                    <span>Render NFT's</span>
                    <span>{renderCollectiblesUriList()}</span>
                    <button onClick={() => setAllCollectibleURI()}>Atualizar</button>
                </div>                
            </div>
            <div>
                {renderCollectiblesImages()}             
            </div>
        </div>
    )
}