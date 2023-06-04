import React from 'react'
import "./error.css"
import {TfiFaceSad} from 'react-icons/tfi';


const Error = () => {
  return (
    <>
      
      <div className="error">404 - Page not found</div>
      <TfiFaceSad size={80} style={{ marginLeft: '45%', marginTop:'40px'}}/>
      
    </>
  )
}

export default Error;