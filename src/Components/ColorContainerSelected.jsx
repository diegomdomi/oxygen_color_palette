import React from 'react'
import ColorSelected from './ColorSelected'


const ColorContainerSelected = (prop) => {
console.log(prop.color)
  const returnColorfromChild = (color1,color2,color3,color4,color5) =>{
    prop.colorsToBack(color1,color2,color3,color4,color5);
  }


  return (
    <>
      <p className="saved_palettes">Saved palettes</p>
      <div className="color_container">
          {prop.color?.map((color,index) => (
            <div className="palette_container"> 
              <small><button className="trash_button" onClick={()=>prop.clearPalette(index)}>🗑️</button></small> 
                <ColorSelected  
                              color1={color.color1}
                              color2={color.color2}
                              color3={color.color3}
                              color4={color.color4}
                              color5={color.color5}
                              borrar={prop.clearPalette}
                              key={index}
                              name={color.name}
                              returnColorfromChild={returnColorfromChild}
                />
            </div>
            ))}
      </div>
    
    </>
  )
}

export default ColorContainerSelected