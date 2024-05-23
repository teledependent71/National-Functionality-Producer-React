import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>National Functionality Producer</title>
        <meta property="og:title" content="National Functionality Producer" />
      </Helmet>
    </div>
  )
}

export default Home
