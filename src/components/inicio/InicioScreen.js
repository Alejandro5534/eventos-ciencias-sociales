import React from 'react'

export const InicioScreen = () => {
  const background = {
    "backgroundImage":"url(../assets/books.jpg)"
  }
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="../assets/edison.jpg" alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="../assets/math.jpg" alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="../assets/pi.jpg" alt="Third slide"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only"></span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only"></span>
    </a>
  </div> 
  <div className='align-items-center' style={background}>
    <h1>Evento de ciencias basicas, a nivel nacional</h1>
  </div>
  {/* <img className="d-block w-100 animation slide-out-right" src="../assets/books.jpg" alt="Third slide"/> */}
  </>
  )
}
