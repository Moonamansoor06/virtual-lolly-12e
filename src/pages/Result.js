 import React from 'react'
import { graphql,gql } from "gatsby";
import "./../pages/styles.css";
import Lolly from '../components/lolly'
import { useQuery } from '@apollo/client';



const GET_VCARD = gql`
query {
  getVCard{
    data
   {
   link
   c1
   c2
   c3
   rec
   sender  
   msg
  }
  }
}
` 
export const Result= ({}) => { 

  const { loading, error, data } = useQuery(GET_VCARD)
  console.log('data is=====',data)
    return (
        <div  className="container">
        
        <h5 >share your lolly link: </h5>
        <span >
      
          {`https://virtual-lolly-12e.netlify.app/VCard/${data.getVCard.data.link}`}
        </span>
        <div className="main-container">
          <Lolly       
            c1={data.getVCard.c1}
            c2={data.getVCard.c2}
            c3={data.getVCard.c3}
          />
  
          <div className="form-container ">
            <h3> To: {data.getVCard.rec}</h3>
            <p>{data.getVCard.msg}</p>
            <h4>From: {data.getVCard.sender}</h4>
          </div>
        </div>
      </div>
);
}



 