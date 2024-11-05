import React from 'react'
import Navbar from './Navbar'
import SanjivaniPage from './SanjivaniPage'
import Footer from './Footer'
import Graph from './Graph'
import Academics from './Academics'

function Home() {
  return (
    <div>
      <Navbar/>
      <SanjivaniPage/>
      <Graph/>
      <Academics/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
