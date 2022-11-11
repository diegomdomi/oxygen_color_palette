import React from 'react'
import './colorGenerator.css'
const ColorSelected = ({color1, color2,color3,color4,color5,name,returnColorfromChild}) =>{
 
 
  return (
    <>

    <small className="title">{name}</small>
    <div className="selected" onClick={()=>returnColorfromChild(color1,color2,color3,color4,color5)}>
        <div className="circle-selected" style={{background:color1}}></div>
        <div className="circle-selected" style={{background:color2}}></div>
        <div className="circle-selected" style={{background:color3}}></div>
        <div className="circle-selected" style={{background:color4}}></div>
        <div className="circle-selected" style={{background:color5}}></div>
    </div>
    </>
  )
}

export default ColorSelected