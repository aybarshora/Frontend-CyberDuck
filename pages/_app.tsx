import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnectV1,
  walletConnect,
  safeWallet,
  paperWallet,
  magicLink,
} from "@thirdweb-dev/react";
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
      ]}
      activeChain="ethereum"
      
    >
      <Header />
      <Component {...pageProps} />
      </ThirdwebProvider>

      </>
  )
 
}

export default MyApp
