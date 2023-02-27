import React from 'react'

function Button({onclick, generated, setGen}) {
  return (
    <div>
        <button style={
            generated ? {
                padding: ".5rem 1rem",
                border: "none",
                outline: "none",
                cursor: "pointer",
                backgroundColor: "#29b475",
                color: "red",
                fontSize: ".9rem",
                fontWeight: "600",
                boxShadow: "2px 2px 3px red",
                width:"66%"

              }
            : {
                padding: ".5rem 1rem",
                border: "none",
                outline: "none",
                cursor: "pointer",
                backgroundColor: "#17a2b8",
                fontSize: ".9rem",
                fontWeight: "600",
                boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px",

                width:"66%"

              }

        } onClick={
            ()=>{
                onclick()
            }
        }>{generated ? "password Generated":"Generate password"}

        </button>
    </div>
  )
}

export default Button