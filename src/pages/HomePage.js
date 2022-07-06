import React from "react";
import 'C:/Users/PC/Desktop/Christian/Diseño Web/Dulcemente Chily React/frontend/src/styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="" alt="" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Tortas, tartas, postres, mesas dulces y mas...</p>
                    <img src="img/fondo-cake.jpg" width={500} alt="portada"/>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Excelente servicio</span>
                        <span class="autor">Carla Aguilera</span>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default HomePage;