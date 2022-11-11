import React,{useState,useEffect} from 'react'
import ColorCircles from './ColorCircles'
import ColorContainerSelected from './ColorContainerSelected'

const ColorGenerator = () => {
  const[colorReceived, setColorReceived] = useState()
  const[colorsToBackCircles, setColorsToBackCircles] = useState([])

  useEffect(() => {
    colorsStorage()
  }, [])
  
  const colorsStorage = ()=>{
    if(localStorage.stylesStorage){
      const colorFromLocal=JSON.parse(localStorage.getItem("stylesStorage"))
     setColorReceived(colorFromLocal)
    }
    
  }
  const receivedColor = (palette)=>{
    setColorReceived(palette)

  }
  
const clearPalette=(index)=>{
    colorReceived.splice(index,1)
    setColorReceived([...colorReceived])
  }

  const colorsToBack = (color1,color2,color3,color4,color5)=>{
    setColorsToBackCircles({color1,color2,color3,color4,color5})
  }

  return (

    <div>
      <h1>Color palette generator</h1>
      <ColorCircles receivedColor={receivedColor} colorsToCircles={colorsToBackCircles}></ColorCircles>
      <ColorContainerSelected  color={colorReceived} clearPalette={clearPalette} colorsToBack={colorsToBack}></ColorContainerSelected>
    </div>
  )
}

export default ColorGenerator