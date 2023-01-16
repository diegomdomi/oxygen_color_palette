import React,{ useState,useEffect } from 'react'
import { CompactPicker } from 'react-color'
import InputColorPicker from './InputColorPicker'
import './colorGenerator.css'

const ColorCircles = (prop) => {
const{color1,color2,color3,color4,color5} = prop.colorsToCircles

 
let estilos ={
  color:"",
  height: "",
  width: "",
}

  
useEffect(() => {
  changeBg()
}, [color1,color2,color3,color4,color5])


const [color,setColor] = useState('#FF4136')
const [circle1,setCircle1] = useState (estilos)
const [circle2,setCircle2] = useState (estilos)
const [circle3,setCircle3] = useState (estilos)
const [circle4,setCircle4] = useState (estilos)
const [circle5,setCircle5] = useState (estilos)
const [newPalette, setNewPalette] = useState ([])
const [myId, setMyId] = useState ()

  const changeBg=()=>{
    setCircle1({ color:color1})
    setCircle2({ color:color2})
    setCircle3({ color:color3})
    setCircle4({ color:color4})
    setCircle5({ color:color5})
  }
  const selectedColor = (e,a) => {
    setCircle1({color:e,height:a,width:a,});
    setMyId(1)
  }
  const selectedColor2=(e,a)=>{
    setCircle2({color:e,height:a,width:a})
   setMyId(2)
  }
  const selectedColor3=(e,a)=>{
    setCircle3({color:e,height:a,width:a})
    setMyId(3)
  }
  const selectedColor4=(e,a)=>{
    setCircle4({color:e,height:a,width:a})
    setMyId(4)
  }
  const selectedColor5=(e,a)=>{
    setCircle5({color:e,height:a,width:a})
    setMyId(5)
  }

  

 const hanldeChangeComplete = (color)=>{
    if(myId === 1 ){
     setCircle1({ color:color.hex})
    }else if(myId === 2){
      setCircle2({ color:color.hex})

    }else if(myId === 3){
      setCircle3({ color:color.hex})

    }else if(myId === 4){
      setCircle4({ color:color.hex})

    }else if(myId === 5){
      setCircle5({ color:color.hex})

    }
  setColor(color.hex)
}

const sendColors = (colorName)=>{
  let newColors= {
    "name":colorName,
    "color1":circle1.color,
    "color2":circle2.color,
    "color3":circle3.color,
    "color4":circle4.color,
    "color5":circle5.color,
  }
  setNewPalette(newPalette=>[...newPalette,newColors])
  localStorage.setItem("stylesStorage", JSON.stringify([...newPalette,newColors]))
  setCircle1({color:""})
  setCircle2({color:""})
  setCircle3({color:""})
  setCircle4({color:""})
  setCircle5({color:""})
  setMyId()
  prop.colorsToCircles([])
  
}

prop.receivedColor (newPalette)

  return (
    <>
      <div className="circles" >
        <div className="circle" id="1" onClick={()=>selectedColor("#0c797d","88px")} style={{height:circle1.height, width:circle1.width, background:circle1.color}}>
        <div className="line_hr" style={{visibility: "hidden"}}></div>
        </div>
        <div className="circle" id="2" onClick={()=>selectedColor2("blue","88px")} style={{background:circle2.color, height:circle2.height,width:circle2.width}}>
        <div className="line_hr" style={{visibility: "hidden"}}></div></div>
        <div className="circle" id="3" onClick={()=>selectedColor3("green","88px")} style={{background:circle3.color, height:circle3.height,width:circle3.width}}>
        <div className="line_hr" style={{visibility: "hidden"}}></div></div>
        <div className="circle" id="4" onClick={()=>selectedColor4("red","88px")} style={{background:circle4.color, height:circle4.height,width:circle4.width}}>
        <div className="line_hr" style={{visibility: "hidden"}}></div></div>
        <div className="circle" id="5" onClick={()=>selectedColor5("cyan","88px")} style={{background:circle5.color, height:circle5.height,width:circle5.width}}> 
        <div className="line_hr" style={{visibility: "hidden"}}></div></div>
      </div>
      <div className="div_color_picker" >
        <CompactPicker className="color_picker"
                       color={color}
                       onChangeComplete={hanldeChangeComplete}
          />

      </div>
      <InputColorPicker sendColors={sendColors}></InputColorPicker>
    </>
  )
}

export default ColorCircles

