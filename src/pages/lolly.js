
import React from "react"
import { Router } from "@reach/router"
import ShowLolly from "../templates/showLolly"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"


// const GETDATA = gql`
//     {    
//         getLolly{
//             recipientName
//             message
//             sender
//             flavourTop
//             flavourMedium
//             flavourBottom
//             lollyPath
//         }
//     }
// `
const GETDATABYID = gql`
    query getLollyByPath($path: String!){
        getLollyByPath(path: $path){
            recipientName
            message
            sender
            flavourTop
            flavourMedium
            flavourBottom
            lollyPath
        } 
    }
`


export default function Lolly({ location }) {

    console.log(location)
    const path = location.pathname.replace("/lolly/", "")
    console.log(path)


    //const { data, loading, error} = useQuery(GETDATA)
    const { data, loading, error } = useQuery(GETDATABYID, { variables: { path } })

    !loading && console.log(data)

    if (error) {
        return (
            <h2>{error}</h2>
        )
    }



    return (
        <div>



            <Router basepath="/lolly">
                {!loading &&
                    data.getLollyByPath.map((value, key) => (
                         <ShowLolly key={key} pageContext={value} path={`/${value.lollyPath}`} />
                        
                            ))
                }

            </Router>



        </div>



    )
}
