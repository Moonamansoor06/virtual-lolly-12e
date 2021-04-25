import React from "react"
import Header from "../components/Header"
import Lolly from "../components/lolly"


export default function Vcard({ pageContext, location }) {
    const VcardData = pageContext
    const origin = location.origin


    return (
        <div>
            <Header />

            <div className="container" >
                <Lolly top={VcardData.c1} middle={VcardData.c2} bottom={VcardData.c3} />
                <div className="main-container" >
                    <p className="share" >Your Lolly is freezing. Share it with this link:</p>
                    <pre>{`${origin}/${VcardData.link}`}</pre>
                    <br />
                    <div className="details" >

                        <p className="recipient" >{VcardData.rec}</p>
                        <div className="message" >{VcardData.msg}</div>
                        <p className="from" >{VcardData.sender}</p>

                    </div>

                </div>


            </div>

        </div>
    )

}