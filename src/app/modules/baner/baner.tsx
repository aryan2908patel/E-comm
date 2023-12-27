import React from 'react'
import './baner.css'


interface Props {
    
}

const Baner = (props: Props) => {
    return (
        <div className="horizontal-box-container">
           <div className="box"><p className="star">★★★★★</p></div>
           <div className="box"></div>
           <div className="box"></div>
           <div className="box"></div>
           <div className="box"></div>
           <div className="box"></div>
           
        </div>
    )
}

export default Baner
