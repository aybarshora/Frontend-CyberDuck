import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { Main } from '../components/Main'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#FBFFDC] text-white select-none flex flex-col justify-between`
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Qush App</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
    </div>
  )
}

export default Home;
