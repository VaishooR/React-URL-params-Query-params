import React from 'react'
import {useParams} from 'react-router-dom';

function Viewproduct() {
    let {phone}= useParams()
  return (
    <div>{phone}</div>
  )
}

export default Viewproduct