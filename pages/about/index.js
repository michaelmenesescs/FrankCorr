import React from 'react'
import Head from 'next/head'
import ResponsiveNavbar from '../../components/ResponsiveNavbar'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const index = () => {
  return (
    <div>
         <Head>
            <title>About - Frank Corr</title>
            <meta name="description" content="Frank Corr, Producer and Mixing Engineer from New York City" />
            <link rel="icon" href="/faviconnew.ico" />
      </Head>
      <ResponsiveNavbar />
      <MainContainer>
        
          Frank Corr is a producer and mixing engineer from New York City.
          He has been working in the music industry for over 10 years.
          He has produced and mixed music for many different artists.
          He has also worked with many different labels.
          He has also worked with many different genres.
          He has also worked with many different styles.
      
      </MainContainer>

      
    </div>
  )
}

export default index