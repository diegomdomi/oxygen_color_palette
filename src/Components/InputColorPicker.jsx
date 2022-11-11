import React,{useState} from 'react'
import './colorGenerator.css'

const InputColorPicker = (prop) => {
  const [savePermit, setSavePermit] = useState (false)
  const [content,setContent] = useState ()
  
  const savePaletteName=(e)=> {
    e.preventDefault()
    if(e.target.value !== ""){
      setSavePermit(true)
      setContent(e.target.value)
    }else{
      setSavePermit(false)
    }
  }
  const savePaletteColors=(e)=>{
    prop.sendColors(content)
    e.target.reset()
    setSavePermit(false)
  }
  const submitpage = (e)=>{
    e.preventDefault()
    e.target.reset()
    setSavePermit(false)
    setContent()
  } 

  return (
        <>  
          <form onSubmit={submitpage}>
            <span className="name">Name</span>
            <input className="input_color" name="input" type="text" onChange={savePaletteName} ></input>
            <button className="add_color" disabled={!savePermit} onClick={savePaletteColors} type="submit">+</button>
          </form>
        </>
  )
}

export default InputColorPicker