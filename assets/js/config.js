
const infura = 'fd7f608c12b74fa1ae34faa3e0f8b9d7'
const isProduction = false



// test wallet and contract config
const infuraIdRink = infura
const RPCProviderRink = 'https://rinkeby.infura.io/v3/fd7f608c12b74fa1ae34faa3e0f8b9d7'
const netIdRink = 4
const chainIdRink = '0x4'
const contract_addressRink = '0xa603E13a3b5995dF0Ce0951bc8AA28EB85Bd39c4'
const mintPriceRink = 0.08
const mintPresalePriceRink = 0.04

// prod wallet and contract config
const infuraIdETH = infura
const RPCProviderETH = 'https://mainnet.infura.io/v3/fd7f608c12b74fa1ae34faa3e0f8b9d7'
const netIdETH = 1
const chainIdETH = '0x1'
const contract_addressETH = ''
const mintPriceETH = 0.08
const mintPresalePriceETH = 0.04

// app
export const infuraId = !isProduction? infuraIdRink : infuraIdETH
export const RPCProvider = !isProduction? RPCProviderRink : RPCProviderETH
export const netId = !isProduction? netIdRink : netIdETH
export const chainId = !isProduction? chainIdRink : chainIdETH
export const contract_address = !isProduction? contract_addressRink : contract_addressETH
export const mintPrice = !isProduction? mintPriceRink : mintPriceETH
export const mintPresalePrice = !isProduction? mintPresalePriceRink : mintPresalePriceETH

export const toastStyle = {
    background: 'radial-gradient(#b8c8ff, #ffffff)',
    color: '#D232EA',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '5px',
    border: '2px solid #b8c8ff'
  };
