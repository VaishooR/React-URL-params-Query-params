import React from 'react'



function Card(props) {
  return (
    <>
    <div class="card m-4" style={{width: '14rem'}}>
        <img src={props.data.image} class="card-img-top " alt="..."/>
          <div class="card-body text-center">
              <h5 class="card-title">{props.data.phone}</h5>
              <p class="card-text">{props.data.price}</p>
              <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
    </div>
    </>
  )
}

export default Card