import React from 'react'
import Head from 'next/head'

const Sobrenosotros = (props) => {
  return (
    <>
      <div className="sobrenosotros-container">
        <Head>
          <title>Sobre nosotros - Burly Playful Trout</title>
          <meta
            property="og:title"
            content="Sobre nosotros - Burly Playful Trout"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .sobrenosotros-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Sobrenosotros
