import React from 'react'

export default function Alert(props) {
  return (
      //Here props.alert is used so that this script will not run till the alert is declared null 
      //null&&any value always returns null
      //So here its important to write the statement to avoid the error
      props.alert&&<div className={`alert alert-${props.alert.type}`} role="alert">
        {props.alert.message}
        </div>
  )
}
