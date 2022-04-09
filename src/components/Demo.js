import React from 'react'
import { useParams } from 'react-router-dom';

function Demo() {
  let {moviesId} = useParams();
  return (
    <div style={{padding: "1rem", fontSize: "18px"}}>Id is {moviesId}{" "}😁</div>
  )
}

export default Demo