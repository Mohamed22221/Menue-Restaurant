import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeaderSlider.scss"
import DataMenue from '../../../components/menue/DataMenue';
import calory from "../../../img/glopal/calorie.png"
import cheese from "../../../img/glopal/cheese2.png"
import ButtonOrder from '../../glopalComponent/ButtonOrder';
const HeaderSlider = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          variableWidth: false,
          centerMode: false
        }
      }
    ]
  };
  return (
    <div className="container-slider-menue" >

      <Slider {...settings} className="slider-menu">
        {DataMenue.filter((item) => item.type == "pizza").map((item) => {
          return (
            <div className={`main-item ${item.type}${item.id}`} >
              <div className='col-slider'>
                <h1>{item.name}</h1>
                <span className='rating'>{item.rating}</span>
                <p>{item.discription}</p>
                <div className='main-about'>
                  <div className='calory'>
                    <img src={calory} />
                    <div className='about'>
                      <h4>480</h4>
                      <p>Calories</p>
                    </div>
                  </div>
                  <div className='cheese'>
                    <img src={cheese} />
                    <div className='about'>
                      <h4>120g</h4>
                      <p>Mozarella</p>
                    </div>
                  </div>

                </div>
                <div className='fotter-slider1'>
                  <ButtonOrder item={`/meal/${item.id}`} title="Order" />
                  <h2>{item.price}$</h2>
                </div>
              </div>
            </div>
          )

        })}


      </Slider>
    </div>
  )
}

export default HeaderSlider