import React from 'react'
import Head from 'next/head'
import ResponsiveNavbar from '../../components/ResponsiveNavbar'

const Discography = () => {
  return (
    <>
    <Head>
      <title>Discography - Frank Corr</title>
      <meta name="description" content="Frank Corr, Producer and Mixing Engineer from New York City" />
      <link rel="icon" href="/faviconnew.ico" />
    </Head>
    <ResponsiveNavbar />
    <div>
      Credits go here
    </div>
    </>
  )
}

export default Discography