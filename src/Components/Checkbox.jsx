import React from 'react'

function Checkbox({label,change}) {
  return (
    <div style={{display:"flex",gap:"10px",fontSize:"1.4rem"} }>
    <input type="checkbox" name="" id="" onClick={()=>{
      change()}} />
    <label htmlFor="" >{label}</label> 
    </div>
  )
}

export default Checkbox