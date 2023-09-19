import React from 'react';
import Carousel from "react-bootstrap/Carousel";


export default function Reviews() {
  return (    
    <>
    <div id="carouselExampleControls" class="carousel slide" data-coreui-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."></img>

    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."></img>

    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."></img>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleControls" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleControls" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
  );
}
