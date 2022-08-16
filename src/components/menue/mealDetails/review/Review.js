import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { useState } from 'react'
import {  useToasts } from 'react-toast-notifications';

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import DomyImg from "../../../../img/glopal/demo.jpg"
const Review = () => {
  const { addToast } = useToasts();
  //get date today
  let date = new Date();
  const formateddate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const [domyData, setDomyData] = useState([
    {
      id: 1,
      img: DomyImg,
      name: "Henry Crow",
      email: "domy@gmail.com",
      date: formateddate,
      msg: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words which don't look even slightlyCollege in Virginia",
      rating: [<StarIcon />, <StarIcon />, <StarIcon />, <StarIcon />, <StarHalfIcon />]

    },
    {
      id: 2,
      img: DomyImg,
      name: "Henry Crow",
      email: "domy@gmail.com",
      date: formateddate,
      msg: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words which don't look even slightlyCollege in Virginia",
      rating: [<StarIcon />, <StarIcon />, <StarIcon />, <StarIcon />, <StarHalfIcon />]

    }
  ])

  const [values, setValues] = useState({
    name: "",
    img: DomyImg,
    email: "",
    date: formateddate,
    msg: "",
    rating: [<StarIcon />, <StarIcon />, <StarIcon />, <StarIcon />, <StarHalfIcon />]


  })

  const HandelComment = (e) => {
    e.preventDefault()
    setDomyData([...domyData, values])
    setValues({...values , name: "", email: "", msg: "",})
    addToast(`Comment added`, { appearance: 'success' });
  }

  console.log(domyData)
  return (
    <motion.div className='main-review' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <h2>Leave a Review</h2>
      <form onSubmit={HandelComment}>
        <div className='top-line-form'>
          <input type="text" placeholder='Full Name' value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} required />
          <input type="email" placeholder='Email Address' value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} required />
        </div>
        <div className='top-line-form'>
          <textarea placeholder='Type your comment...' value={values.msg} onChange={(e) => setValues({ ...values, msg: e.target.value })} required />
        </div>
        <button>POST REVIEW</button>
      </form>
      <div className='commnted'>
        {domyData.map((item , index) => {
          return (
            <div className='one-comment' key={index}>
              <div className='top-one-comment'>
                <div className='top-one-comment-img'>
                  <img src={item.img} />
                  <div>
                    <h4>{item.name}</h4>
                    <div className='rating'>{item.rating.map(rate => { return <p>{rate}</p> })}</div>
                  </div>

                </div>
                <div className='top-one-comment-date'>
                  <span>Posted on: {item.date}</span>

                </div>
              </div>
              <div className='msg-one-comment'>
                <p>{item.msg}</p>

              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Review