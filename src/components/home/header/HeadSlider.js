import { Container } from '@mui/material'
import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeadSlider.scss"
import calory from "../../../img/glopal/calories.png"
import cheese from "../../../img/glopal/cheese.png"

const HeadSlider = ({ DataMenue }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const settings = {

    responsive: [
      {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
        }
      },
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
             }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
             
          }
      }
  ]
  };
  return (
    <Container maxWidth="lg">
      <div className='slider'>

        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} >
          {DataMenue.filter(item => item.type === "pizza").map((item) => {
            return (
              <div  >
                <div className='row-slider'>
                  <div className='col-slider'>
                    <h1>{item.title}</h1>
                    <h2>{item.name}</h2>
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
                          <h4>480</h4>
                          <p>Mozarella</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-slider'>
                    <img src={item.img} />
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          className="secound-slider"
          {...settings}

        >
          {DataMenue.filter(item => item.type === "pizza").map((item) => {
            return (
              <div>
              <div className='row-slider2'>
                <div className='item-row-slider2'>
                  <div className='img'>
                  <img src={item.img} />

                  </div>
                  
                  <div class="banner-nav-item-body">
                    <h5>{item.name}</h5>
                    <span>{item.price}$</span>
                  </div>
                </div>
                
              </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </Container>
  );

}

export default HeadSlider