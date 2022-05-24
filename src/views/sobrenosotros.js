import React from 'react'

import { Helmet } from 'react-helmet'

import './sobrenosotros.css'

const Sobrenosotros = (props) => {
  return (
    <div className="sobrenosotros-container">
      <Helmet>
        <title>Sobre nosotros - Burly Playful Trout</title>
        <meta
          property="og:title"
          content="Sobre nosotros - Burly Playful Trout"
        />
      </Helmet>
    </div>
  )
}

export default Sobrenosotros
