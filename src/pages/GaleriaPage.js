import React from "react";
import '../styles/components/pages/GaleriaPage.css';

const GaleriaPage = (props) => {
    return (
        <main className="holder">
            <div id="carouselExampleIndicators" class="carousel slide w-75 mx-auto" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner border border-5 border-opacity-50 rounded-3">
                    <div class="carousel-item active">
                        <img src="img/torta1.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="img/torta2.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="img/torta3.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="img/torta4.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className='subtitulo'>
                <h3>Aquí tenés una galería con algunos de los trabajos que venimos realizando</h3>
            </div>
        </main>
    )
};


export default GaleriaPage;