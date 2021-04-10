import React from 'react'
import { navigate } from "gatsby";


export const Result= ({ link, rec, sender, msg}) => {
    return (
        <div className="result">
            <br></br>

            <h4>Share lolly with this link:</h4>
            <h3>{`https://virtual-lolly-12e.netlify.app//lollies/${link}`}</h3>
            <div className="resultCard">
                <p >To:{sender}</p>
                <p >Message:{msg}</p>
                <p>From:{rec}</p>
            </div>
            <br></br>

            <button onClick={() => navigate("/")}> Go Back</button>
</div>
);
}
