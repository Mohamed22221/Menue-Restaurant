import React from 'react'
import About from '../components/home/about/About';
import HeadSlider from '../components/home/header/HeadSlider'
import TopHeader from '../components/home/topheader/TopHeader';
import DataMenue from '../components/menue/DataMenue';
import Menue from "./Menue"

const Home = () => {
  return (
    <>
      <TopHeader />
      <HeadSlider DataMenue={DataMenue} />
      <About />
      
    </>
  )
}

export default Home