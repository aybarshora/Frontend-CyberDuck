import type { NextPage } from 'next'
import Head from 'next/head'
import { Main } from '../components/Main'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CyberDuckCoin App</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      
      <Main />
    </div>
  )
}

export default Home;
