import React from 'react'
import { Router } from '@reach/router'
import Vcard from '../templates/vcard'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

const getVCardLink = gql`
    query ggetVCardLink($path: String!){
        getVCardLink(path: $path){
            c1
      c2
      c3
      msg
      rec
      sender
      link
    }
        } 
    }
`


export default function Result({ location }) {

    console.log(location)
    const path = location.pathname.replace("/vcard/", "")
    console.log(path)


    
    const { data, loading, error } = useQuery(getVCardLink, { variables: { path } })

    !loading && console.log(data)

    if (error) {
        return (
            <h2>{error}</h2>
        )
    }



    return (
        <div>



            <Router basepath="/vcard">
                {!loading &&
                    data.getVCardLink.map((value, key) => (
                         <Vcard key={key} pageContext={value} path={`/${value.link}`} />
                        
                            ))
                }

            </Router>



        </div>



    )
}





/* import React from 'react'
import {ResultComponent} from '../components/ResultComponent'
import {gql, useQuery } from '@apollo/client';



const Result = () => {
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
    const { loading, error, data } = useQuery(GET_VCARD) 
    console.log('data is=====',data)
    var dataArray=data.GET_VCARD.data.lenght-1
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1> {error}</h1>
   
    return (
        <div>
            <ResultComponent data={data[dataArray]}/>
        </div>
    )
}
export default Result */