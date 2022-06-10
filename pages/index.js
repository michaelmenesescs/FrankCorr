import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ResponsiveNavbar from '../components/ResponsiveNavbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Frank Corr</title>
        <meta name="description" content="Frank Corr, Producer and Mixing Engineer from New York City" />
        <link rel="icon" href="/faviconnew.ico" />
      </Head>
    <ResponsiveNavbar />
    <div className={styles.zindex}>
      <Image src="/frankstudio.png" alt="Frank Corr" width={1200} height={900} layout="responsive" />
    </div> 
    </div>
  )
}
