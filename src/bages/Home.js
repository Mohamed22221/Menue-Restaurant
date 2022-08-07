import React from 'react'
import HeadSlider from '../components/home/header/HeadSlider'
import DataMenue from '../components/menue/DataMenue';

const Home = () => {
  return (
    <>
      <HeadSlider DataMenue={DataMenue} />
    </>
  )
}

export default Home