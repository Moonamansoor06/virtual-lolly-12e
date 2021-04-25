

import React, { useState } from 'react';
import Lolly from '../components/lolly'
import { useMutation, gql} from '@apollo/client';
import { useFormik } from "formik"
import * as Yup from "yup"
import shortid from "shortid";
import { navigate } from "@reach/router"
import "./styles.css";




const ADD_VCARD = gql`
    mutation addVCard($c1: String!, 
        $c2: String!,
        $c3: String!,
        $rec: String!,
        $sender: String!,
        $msg: String!){
            addVCard(c1: $c1,c2: $c2,c3: $c3,rec: $rec,sender: $sender,msg: $msg)
    }
`

 const GET_VCARD = gql`
  {
    getVCard {
      VCard{
      c1
      c2
      c3
      msg
      rec
      sender
      link
    }
  }}
`
 

export default function ResultCard() {

/*   const [updated, setUpdated] = useState(false) */
  const [c1, setC1] = useState("#deaa43");
  const [c2, setC2] = useState("#e95946");
  const [c3, setC3] = useState("#d52358");



  const [addVCard] = useMutation(ADD_VCARD);
  const formik = useFormik({
    initialValues: {
      rec: "",
      sender: "",
      msg: "",
    },
    validationSchema: Yup.object({
      rec: Yup.string()
        .required("Required")
        .max(15, "Enter Receiver Name, 15 characters or less"),
      sender: Yup.string()
        .required("Required")
        .max(15, "Enter Sender Name, 15 characters or less"),
      msg: Yup.string().required("Required"),
    }),
    onSubmit: values => {
      const id = shortid.generate()

      const submitVCard = async () => {
         await addVCard({
          variables: {
            rec: values.rec,
            sender: values.sender,
            c1: c1, c2: c2, c3: c3,
            link: id,
          },
          refetchQueries: [{ query: GET_VCARD}]
        
        })
        .then(result => {
          navigate(`/${result.data.createLolly.lollyPath}`)
          
          console.log(result)
      }
    
    

  
    
  
        )}

  submitVCard()

}
})






  return (<div className="container">
    <h1>Create Lolly</h1>
    <div className="main-container">

      <div>
        <Lolly top={c1} middle={c2} bottom={c3} />
        <br />
        <input type="color" value={c1} onChange={(e) => { setC1(e.target.value) }} />
        <input type="color" value={c2} onChange={(e) => { setC2(e.target.value) }} />
        <input type="color" value={c3} onChange={(e) => { setC3(e.target.value) }} />
      </div>
      <div>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="sendName">
            To:
          </label>
          <div>
            {formik.errors.rec && formik.touched.rec
              ? formik.errors.rec
              : null}
          </div>
          <input
            type="text"
            name="rec"
            id="rec"
            onChange={formik.handleChange}
          />
          <div>
            <label htmlFor="msg" style={{ marginTop: '2px' }}>

              Message:{" "}
            </label>
            <div >
              {formik.errors.msg && formik.touched.msg
                ? formik.errors.msg
                : null}
            </div>
            <textarea
              id="msg"
              name="msg"
              onChange={formik.handleChange}
              className="inputTextBox"
              cols={30}
              rows={15}
            />
          </div>
          <div>
            <label htmlFor="sender" style={{ marginTop: '2px' }}>

              From:{" "}
            </label>
            <div >
              {formik.errors.sender && formik.touched.sender
                ? formik.errors.sender
                : null}
            </div>
            <input
              onChange={formik.handleChange}
              className="inputText"
              type="text"
              name="sender"
              id="sender"
            /></div>
          <br></br>
          <br></br>

          <button type="submit">
            Send Lolly to a Friend
          </button>
        </form>

      </div>



    </div>




  </div>


  )
}