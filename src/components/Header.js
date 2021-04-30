import { Link } from "@reach/router"
import React from "react"
import '../pages/styles.css'

export default function Header() {
    return (
        <div >
            <Link to="/" > 
            <h1 >
                virtual lolly
            </h1>
                </Link>
            <p className='lollyslogan' > because we all know someone who deserves some sugar</p>


        </div>

    )

}