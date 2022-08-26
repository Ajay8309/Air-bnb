import React from 'react'
import Header from './Header'
import Card from './Card'
import './index.css'
import Data from './data'




export default function App(){
    const cardItem = Data.map(e=>{
        return(
            <Card
            {...e}

            />
        )
    })
    return(
        <div>
        <Header />
          <div className="card-container">
            {cardItem}
          </div>
        </div>
    )
}
