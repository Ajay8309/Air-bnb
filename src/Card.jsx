
import React from 'react'
// import cardImg from '../public/katie-zaferes.png'
import star from '../public/star.png'
import './index.css'

export default function Card(props){

  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }
    return(
        <div className='card'>

            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
          <img src={`../public/${props.coverImg}`}  alt="" /><br />
          <div className="card-stats">
           <img src={star} alt="" className='star'/>
           <p className='rating'>{props.stats.rating}</p>
           <p className='review-count'>({props.stats.reviewCount})</p>
           <p className='location'>.{props.location}</p>
          </div>
          <div className="title">
            {props.title}
          </div>
          <p className='price'> <strong>From ${props.price}</strong>/Person </p>

        </div>
    )
}