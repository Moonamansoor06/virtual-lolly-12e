import React from "react"
import Lolly from "../components/lolly"
import { navigate } from "gatsby"
import './styles.css'

export default function index() {
  return (
    <div className="container">
    
      <div className="main-container" >

      <div className="listLollies">
        <div>
          <Lolly top="#d52358" middle="#e95946" bottom="#deaa43"  />
        </div> 
        <div>
          <Lolly top="red" middle="green" bottom="blue"  />
        </div>  
      </div>
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


























