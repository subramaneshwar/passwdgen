import React from 'react'
// import { RiFileCopyFill } from 'react-icons/fa';
// import { IoIosCopy } from "react-icons/io";

import './input.css'
function Input({handelText,setHandelText,copied,setCopied}) {
  return (
    <div className='input'>
        <input type="text" value={handelText} onChange={(e)=>{
          setHandelText(e.target.value);
        }} 
        style={{
          width:"60%",
          padding: ".5rem 1rem",
          backgroundColor: "transparent",
          color: "black",
          fontSize: "1rem",
          fontWeight: "600",
          outline: "none",
          // margin:"5px",
          // borderBottom: "1px solid white",
          boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        }}
        />
          <button className='buts'
          style={
            copied
              ? {
                  padding: ".5rem 1rem",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "#29b475",
                  color: "red",
                  fontSize: "1rem",
                  fontWeight: "600", 
                }
              : {
                  padding: ".5rem 1rem",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "#17a2b8",
                  fontSize: "1rem",
                  fontWeight: "600",
                  // boxShadow: "2px 2px 3px red",
                  color:"white",
                  // borderRadius:"20%"
                }
          }
          onClick={() => {
            if (handelText.length > 0) {
              navigator.clipboard.writeText(handelText);
              setCopied(true);
              setInterval(() => {
                setCopied(false);
              }, 2000);
            }
          }}
        >
          {<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456 480H136a24 24 0 01-24-24V128a16 16 0 0116-16h328a24 24 0 0124 24v320a24 24 0 01-24 24z"></path><path d="M112 80h288V56a24 24 0 00-24-24H60a28 28 0 00-28 28v316a24 24 0 0024 24h24V112a32 32 0 0132-32z"></path></svg>}
        </button>
    </div>
  )
}

export default Input