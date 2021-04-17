import React from 'react'
import { graphql } from "gatsby";
import "./../pages/styles.css";


export const query = graphql`
query myQuery ($link:String!) {
getVCardLink{
  VCards{
   link,
  

  }}
  
}
`




export const Result= ({ data}) => {
    return (
        <div  className="container">
        
        <h5 >share your lolly link: </h5>
        <span >
      
          {`https://virtual-lolly-12e.netlify.app/VCard/${data.getVCardLink.VCards.link}`}
        </span>
        <div className="main-container">
          <Lolly
       
            c1={data.getVCardLink.VCards.c1}
            c2={data.getVCardLink.VCards.c2}
            c3={data.getVCardLink.VCards.c3}
          />
  
          <div className="form-container ">
            <h3> To: {data.getVCardLink.VCards.rec}</h3>
            <p>{data.getVCardLink.VCards.msg}</p>
            <h4>From: {data.getVCardLink.VCards.sender}</h4>
          </div>
        </div>
      </div>
);
}



