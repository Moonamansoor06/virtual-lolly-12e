import React from 'react'
import Lolly from '../components/lolly'
import { useMutation, gql, useQuery } from '@apollo/client';
import { Result } from './../components/Result'

import "./styles.css";


const GET_VCard = gql`
query   
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
    `

function ResultCard() {
    const { error, loading, data } = useQuery(GET_VCard)



  if (loading) return <h1>Loading...</h1>
 


  var arrayLength = data.getVCard.length
  console.log(arrayLength)
  const Vlink = data[arrayLength - 1].link
  const Vsender = data?.getVCard[arrayLength - 1].sender
  const Vrec = data?.getVCard[arrayLength - 1]?.rec
  const Vmsg = data?.getVCard[arrayLength - 1]?.msg
  const c1= data?.getVCard[arrayLength - 1]?.c1
  const c2= data?.getVCard[arrayLength - 1]?.c1
  const c3= data?.getVCard[arrayLength - 1]?.c1

    return (
        <div>
           
        <Lolly top={c1} middle={c2} bottom={c3} />
            <Result link={Vlink}
            sender={Vsender}
            rec={Vrec}
            msg={Vmsg} />
        </div>
    )
}

export default ResultCard
