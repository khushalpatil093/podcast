import React from 'react'
import Header from '../components/Header'

function Home() {
  return (
    <div>
        <Header/> 
        <div className='home'>
          <h1 className='title'>PODCAST.</h1>
          <p className='text'>"Your destination for endless stories, just a play away."</p>
        </div>
    </div>
  )
}

export default Home;