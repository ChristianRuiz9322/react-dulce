import React from "react";
import 'C:/Users/PC/Desktop/Christian/Diseño Web/Dulcemente Chily React/frontend/src/styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
       <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Erase una vez, un panadero en 1976 que comenzó su panadería y le quería poner un toque especial bla bla bla. 
                años mas tarde su produccion aumentó de tal manera que tuvo que agrandar su espacio y conseguir un lugar mucho 
                mas grande para continuar su negocio.
                </p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="" alt="Juan gomez" />
                        <h5>Juan Gomez</h5>
                        <h6>Gerente general</h6>
                        <p>aqui va la historia de Juan gomez</p>
                    </div>
                    <div className="persona">
                        <img src="" alt="Juan Asturias" />
                        <h5>Juan Asturias</h5>
                        <h6>Cocinero principal</h6>
                        <p>aqui va la historia de Juan gomez</p>
                    </div>
                    <div className="persona">
                        <img src="" alt="Dolores Umbridge" />
                        <h5>Dolores Umbridge</h5>
                        <h6>Pastelera</h6>
                        <p>aqui va la historia de Juan gomez</p>
                    </div>
                    <div className="persona">
                        <img src="" alt="Kiadi Mundi" />
                        <h5>Kiadi Mundi</h5>
                        <h6>Administrador</h6>
                        <p>aqui va la historia de Juan gomez</p>
                    </div>
                </div>
            </div>
       </main>
    )
}

export default NosotrosPage;