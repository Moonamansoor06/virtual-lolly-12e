import React from "react"
import Lolly from "../components/lolly"
import { navigate } from "gatsby"
import './styles.css'

export default function index() {
  return (
    <div className="container">
    
      <div className="main-container" >
    
        <Lolly     
         c1="#6b6bde"
         c2="#4ac383"
         c3="#d2ec27"
        />
       
      </div>

      <button      
        onClick={() => {
          navigate("/resultCard")
        }}
      >
        Send customized lolly to a friend
      </button>
    </div>
  )
}


























