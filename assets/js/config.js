
const infura = 'fd7f608c12b74fa1ae34faa3e0f8b9d7'
const isProduction = false



// test wallet and contract config
const infuraIdRink = infura
const RPCProviderRink = 'https://eth-goerli.g.alchemy.com/v2/m_9npD9RVy6zWoaOMxMHHL1oXGLm9G5V'
const netIdRink = 5
const chainIdRink = '0x5'
const contract_addressRink = '0xAbfa04E4Ec5cCDEDB435e54A792F1A8CfE1f71a6'
const mintPriceRink = 0.001


// prod wallet and contract config
const infuraIdETH = infura
const RPCProviderETH = 'https://mainnet.infura.io/v3/fd7f608c12b74fa1ae34faa3e0f8b9d7'
const netIdETH = 1
const chainIdETH = '0x1'
const contract_addressETH = '0x45307591960C5A8da729521f7761F6978Ef5aC05'
const mintPriceETH = 0.08


// app
export const infuraId = !isProduction? infuraIdRink : infuraIdETH
export const RPCProvider = !isProduction? RPCProviderRink : RPCProviderETH
export const netId = !isProduction? netIdRink : netIdETH
export const chainId = !isProduction? chainIdRink : chainIdETH
export const contract_address = !isProduction? contract_addressRink : contract_addressETH
export const mintPrice = !isProduction? mintPriceRink : mintPriceETH


export const toastStyle = {
    background: 'radial-gradient(#b8c8ff, #ffffff)',
    color: '#D232EA',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '5px',
    border: '2px solid #b8c8ff'
  };
