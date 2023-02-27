import React from 'react'

function Length({change}) {
  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      width:"65%",
      height:"5%",
      margin:"10px 0"
    }}>
        <label htmlFor="" style={{ fontSize:"1.4rem"}}>select password length</label>
        <input type="number"style={{width:"15%", height:"30px",fontSize:"1.4rem",paddingLeft:".5rem" }} name="" id=""  onChange={(e)=>{
            change(e.target.value)

        }}/>
    </div>
  )
}

export default Length