import React from "react"
import { navigate } from "@reach/router"


const NotFoundPage = ({location}) => {
    
    if(location.pathname!=="/"){
    console.log("Site Origin :",location.origin)

    navigate(`/lolly${location.pathname}`)
}

    if(typeof window !== "undefined" ){


        window.location.reload()
    }


    return(
        <div>
            Let us get you lolly....
        </div>
    )
}
export default NotFoundPage