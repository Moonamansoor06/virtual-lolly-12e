import React from 'react'
import { graphql } from "gatsby";
import "./../pages/styles.css";


export const query = graphql`
query myQuery ($link:String!) {
GetVCardLink {
  getVCardbyLink{
   link,
     c1
     c2
     c3
      msg
      rec
      sender

  }}
  
}
`




export const Result= ({ data}) => {
    return (
        <div  className="container">
        
        <h5 >share your lolly link: </h5>
        <span >
      
          {`https://virtual-lolly-12e.netlify.app/VCard/${data.GetVCardLink.link}`}
        </span>
        <div className="main-container">
          <Lolly
       
            c1={data.GetVCardLink.getVCardbyLink.c1}
            c2={data.GetVCardLink.getVCardbyLink.c2}
            c3={data.GetVCardLink.getVCardbyLink.c3}
          />
  
          <div className="form-container ">
            <h3> To: {data.GetVCardLink.getVCardbyLink.rec}</h3>
            <p>{data.GetVCardLink.getVCardbyLink.msg}</p>
            <h4>From: {data.GetVCardLink.getVCardbyLink.sender}</h4>
          </div>
        </div>
      </div>
);
}



