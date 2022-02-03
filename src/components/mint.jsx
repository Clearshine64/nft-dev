import { useState } from 'react'
import { BigNumber } from 'ethers'
import { getContract } from '../containers/home';

export const Mint = (props) => {
  const [mintCount, setMintCount] = useState(1);
  function increase() {
    if(mintCount<props.maxTokenPurchase) {
      let newCount = mintCount + 1;
      setMintCount(newCount);
    }
  }
  function decrease() {
    if(mintCount>1) {
      let newCount = mintCount - 1;
      setMintCount(newCount);
    }
  }

  async function onMint() {
    const { walletAddress, setStatus, setMintLoading, totalSupply, maxTokens } = props
    if (!walletAddress) {
        setStatus('Please connect with Metamask')
        return
    }

    if ( mintCount > (maxTokens - totalSupply) ) {
        setStatus(`We are reached already max supply, You can mint less than ${maxTokens - totalSupply}`)
        return 
    }
    setMintLoading(true)

    const contract = getContract()
    try {
            let tx = await contract.mintToken(mintCount, { value: BigNumber.from(1e9).mul(BigNumber.from(1e9)).mul(5).div(100).mul(mintCount), from: walletAddress })
            let res = await tx.wait()
            if (res.transactionHash) {
            setStatus(`You minted ${mintCount} Rabble Successfully`)
            setMintLoading(false)
            }
        } catch (err) {
            let status = "Transaction failed because you have insufficient funds or sales not started"
            setStatus(status)
            setMintLoading(false)
        }
   
  }

  return (
    <div id="mint">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="mint-text">
              <h2>Buy a Camel</h2>
              <p>
              Buying a Crypto Camel costs 0.2 ETH + gas. CCC membership costs the same for everyone. Sign in through your Metamask wallet and buy through ETH (If you need to purchase some ETH, go to rain.bh)
              </p>
              <p>
              Note: A Hundred camels are being withheld from the sale. These will be used for giveaways, rewards and for the creators
              </p>
              <h3> MAX OF ({props.maxTokenPurchase}) </h3>

              <div className="mint-main">

                <div className="counter">
                  <span className="down" onClick={decrease}>-</span>
                  <input disabled="" type="text" value={mintCount} id="selectedAmount" readOnly />
                  <span className="up" onClick={increase}>+</span>
                </div>             
                <img className="eth-logo" src="img/ETH-logo.svg" /> 
                <p className="title-mint"><span id="price">{ parseFloat(0.2 * mintCount).toFixed(2)}</span> + Gas</p>
              </div>
              {
                props.loading ?
                <button className="btn btn-lg mint-button">
                  Minting
                </button>
                :
                <button className="btn btn-lg mint-button" onClick={onMint}>
                  MINT
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
