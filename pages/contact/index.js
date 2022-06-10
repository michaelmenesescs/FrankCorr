import React from 'react'
import ResponsiveNavbar from '../../components/ResponsiveNavbar'
import Head from 'next/head'
import styled from 'styled-components'


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contact = () => {
  return (
    <>
    <Head>
      <title>Contact - Frank Corr</title>
      <meta name="description" content="Frank Corr, Producer and Mixing Engineer from New York City" />
      <link rel="icon" href="/faviconnew.ico" />
    </Head>
    <ResponsiveNavbar />
    <MainContainer>
      <h1>Contact</h1>
      <p>
        Feel free to contact me at <a href="mailto:morningsilkmusic@gmail.com">morningsilkmusic@gmail.com </a>
      </p>
    </MainContainer>
    
    </>
  )
}

export default Contact