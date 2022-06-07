  import Web3 from 'web3'  
  import Web3Modal from 'web3modal'  
  import WalletConnectProvider from '@walletconnect/web3-provider'
  import Toastify from 'toastify-js';
import { chainId, infuraId, netId, RPCProvider, toastStyle } from './config';



  const provOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: infuraId,
        rpc: {[netId]:RPCProvider},
        chainId: netId
      },
    },
  };


  export const showToastLoader = (text) => {
    const loader = document.createElement("div");
    loader.style='display:flex; align-items:center; gap:10px;'
    loader.innerHTML=`
      <div class="swiperloader loader__small"></div>
      <div>${text||'in progress...'}</div>
      `
    Toastify({
      text: ``,
      style: toastStyle,
      duration:-1,
      node:loader,
    }).showToast();
  }
  export const hideAllToasts = () => {
    const toasts = document.querySelectorAll('.toastify')
    toasts && toasts.length>0 && toasts.forEach((t)=>t.style='display:none') 
  }
  
  const isConnecting = (isLoading) => {
    if (isLoading) {
      showToastLoader('Authorization...')
    } else {
      hideAllToasts()
    }
  };

  const logout = async () => {
    window && window.localStorage.removeItem('autoLogin');
    // web3Modal.clearCachedProvider();
  };

 

  export const initWeb3 = async () => {
    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: false, // optional
      providerOptions: provOptions, // required
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });
    isConnecting(true);
    try {
      const prov = await web3Modal.connect()
      
      console.log('prov', prov)
      if (prov.chainId !== chainId && prov.chainId !==netId) {
      console.log('prov.chainId', prov.chainId, chainId)
          window && await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chainId }], // chainId must be in hexadecimal numbers
        });
      }
      const web3 = new Web3(prov);
      console.log('web3', web3)
      const account = prov.selectedAddress || prov.address || (prov?.accounts? prov?.accounts[0] : undefined);
      console.log('account', account)
      isConnecting(false);
      return {web3:web3, provider:prov, account:account}

    } catch (e) {
      console.log('Could not get a wallet connection', e);
      isConnecting(false);
      Toastify({
        text: `Please, connect wallet`,
        style: toastStyle,
      }).showToast();
      logout()
      return false;
    }
  };
  
  
  
  export const onwindowload = async () => {

    if (window && window.localStorage.autoLogin && !account) {
      if(window.ethereum){
        return initWeb3('injected');
      } else {
        return initWeb3();
      }
    } else {
      logout();
    }
  };


  