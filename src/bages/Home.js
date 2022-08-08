import React from 'react'
import About from '../components/home/about/About';
import HeadSlider from '../components/home/header/HeadSlider'
import DataMenue from '../components/menue/DataMenue';

const Home = () => {
  return (
    <>
      <HeadSlider DataMenue={DataMenue} />
      <About />
    </>
  )
}

export default Home