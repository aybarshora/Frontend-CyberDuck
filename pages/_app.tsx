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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
      ]}
      activeChain="ethereum"
      
    >
      <Component {...pageProps} />
      </ThirdwebProvider>

     
  )
}

export default MyApp
