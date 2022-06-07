import Toastify from "toastify-js";
import { abi } from "./abi";
import { contract_address, mintPresalePrice, mintPrice, toastStyle } from "./config";
import { hideAllToasts, showToastLoader } from "./connect";



const isMinting = (isLoading) => {
  if (isLoading) {
  } else {
  }
};


export const mint = async (web3, account, inputAmount) => {

  isMinting(true);
  // const mm = window.ethereum ? 'mm' : undefined
  // if(!web3) await initWeb3(mm)
  // if(!web3) {
  //   Toastify({
  //     text: `Please connect your wallet to mint NFT`,
  //     style: toastStyle,
  //   }).showToast();
  //   isMinting(false)
  //   return 
  // }
  const contract = new web3.eth.Contract(abi, contract_address);
  let amount;

  showToastLoader('Checking mint is not paused...')
  const isPaused = await contract.methods.isPaused().call()
  hideAllToasts()
  if(isPaused){
    Toastify({
      text: `Mint has not started yet`,
      style: toastStyle,
    }).showToast();
  isMinting(false);
  return
  }


  if (Number(inputAmount) > 0 && Number(inputAmount) <= 20) {
    amount = Number(inputAmount);
  } else if (Number(inputAmount) < 1) {
    amount = 1;
  } else if (Number(inputAmount) > 20) {
    amount = 20;
  }

  const isPresale = await contract.methods.isOnPresale().call()
  let whiteListed = false
  console.log('isPresale', isPresale)
  if(isPresale){
    try {
      whiteListed = await contract.methods.isWhiteListed(account).call()
      console.log('whitelisted', whiteListed)
    } catch (error) {
      console.log('whiteListedCall err', whiteListedCall)
    }
  }

  if (isPresale) {
    if (whiteListed) {
      try {
        showToastLoader('Mint transaction in progress...')
        await contract.methods.mintPresale(amount).send({
              from: account, 
              value: amount*mintPresalePrice*10**18
          });
        hideAllToasts()
        Toastify({
          text: amount>1?`You have successfully minted ${amount} NFTs!`:'You have successfully minted NFT!',
          style: toastStyle,
        }).showToast();
        isMinting(false);
      } catch (error) {
        console.log('error', error);
        isMinting(false);
        hideAllToasts()
        Toastify({
          text: 'Something went wrong',
          style: toastStyle,
        }).showToast();
      }
    } else {
      Toastify({
        text: amount>1?`You have successfully minted ${amount} NFTs!`:'You have successfully minted NFT!',
        style: toastStyle,
      }).showToast();
    }
  } else {
    try {
      showToastLoader('Mint transaction in progress...')
      await contract.methods.mint(amount).send({
        from: account,
        value: amount*mintPrice*10**18
      });
      hideAllToasts()
      Toastify({
        text: amount>1?`You have successfully minted ${amount} NFTs!`:'You have successfully minted NFT!',
        style: toastStyle,
      }).showToast();
      isMinting(false);
    } catch (error) {
      console.log('error', error);
      isMinting(false);
      hideAllToasts()
      Toastify({
        text: 'Something went wrong',
        style: toastStyle,
      }).showToast();
    }
  }
  
    
};

