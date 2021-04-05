import React from 'react'
import { Router } from '@reach/router';
import { useQuery } from '@apollo/client';
import Lolly from '../components/lolly';
import gql from 'graphql-tag';
const GET_VCard =gql`
query MyQuery {
  
  getVCard  {
    id 
      c1 
      c2 
      c3 
      sender 
      message 
      rec 
      link 
    }
    }
  
`;
export default function VirtualCard() {
    const { data, loading, error } = useQuery(GET_VCard);
    if (loading)
        return       
        <h2>Loading .... </h2>
    
    if (error) 
      return <h1>Error...</h1>
      
      return (
        <Router basepath="/vcard">
           {data.getVCard.map((value,key)=>{
               return( 
               <Lolly key={key} pageContext={value} path={`/${value.link}`}> </Lolly>
               )
           })}
        </Router>
    )
}