import React from 'react'
import About from '../components/home/about/About';
import Delever from '../components/home/deliver/Delever';
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
      <Delever/>
    </>
  )
}

export default Home