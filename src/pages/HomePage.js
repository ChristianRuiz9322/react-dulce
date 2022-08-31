import React from "react";
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            {/* <div className="homeimg">
                <img src="" alt="" />
            </div> */}
            {/* <div className="columnas"> */}
                <div className="bienvenidos">
                    <h1>Dulcemente Chily | Repostería artesanal</h1>
                    {/* <h2>Bienvenidos</h2>
                    <p>Tortas, tartas, postres, mesas dulces y mas...</p> */}
                    { <div className="imagen-portada">
                        <img src="img/fondo-cake2.jpg" alt="portada"/>
                        <img src="img/fondo-cake.jpg" alt="portada"/>
                    </div> }
                    <h2>Somos parte de tus momentos especiales.</h2>
                    <h3>Tortas, tartas, postres, cajas dulces, mesas dulces y más!</h3>
                    <h3>Consultá por precios y reservas.</h3>
                </div>
                {/* <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Excelente servicio</span>
                        <span class="autor">Carla Aguilera</span>
                    </div>
                </div> */}
            {/* </div> */}

        </main>
    )
}

export default HomePage;