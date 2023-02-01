import styles from '@/styles/Home.module.css'
import Header from "@/components/Header"
import Banner from "@/components/Banner"
import TopComputers from '@/components/TopComputers'
import Footer from "@/components/Footer"
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>PC build</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner/>
      <TopComputers/>
      <Footer/>
    </>
  )
}
