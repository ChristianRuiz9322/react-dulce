import React from "react";
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
       <main className="holder">
            <div className="historia">
                <h2>Mi historia</h2>
                <p> La repostería llegó a mi vida desde muy joven, mis inicios fueron en casa de mis padres con pequeños 
                encargos para mis compañeros de la universidad. Luego, de un largo tiempo dedicada a mi vida personal 
                y laboral, nace Ricardo Andrés, mi primer pedacito de cielo y es cuando decidí retomar mi amor por los 
                postres. esde ahí se convirtió en mi gran pasión. Ser repostera ha llenado mi vida de dulce y mucho 
                amor, me ha permitido compartir con mis clientes y hacerlos felices con mis postres. Esto sin dejar 
                a un lado mis carreras de diseñador gráfico y publicista que se han vuelto el complemento perfecto para 
                la esta pasión. 
                Endulzar sus momentos tiene su cuota de sacrificio, se necesita mucha dedicación y amor, pero a veces 
                mi familia también lo requiere, hago mi mayor esfuerzo para tener ese equilibrio perfecto, que me 
                permite cumplir con mi papel de madre, esposa, hija y repostera, nada fácil. </p>
            </div>
            <div className="staff">
                <h2>Mi Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="./img/cocinera1.jpg" alt="Juana gomez" />
                        <h5>Juana Gomez</h5>
                        <h6>Gerente general</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                            est laborum</p>
                    </div>
                    <div className="persona">
                        <img src="./img/cocinero1.jpg" alt="Juan Asturias" />
                        <h5>Juan Asturias</h5>
                        <h6>Cocinero principal</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                            est laborum</p>
                    </div>
                    <div className="persona">
                        <img src="./img/cocinera2.jpg" alt="Dolores Umbridge" />
                        <h5>Dolores Umbridge</h5>
                        <h6>Pastelera</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                            est laborum</p>
                    </div>
                    <div className="persona">
                        <img src="./img/cocinero2.jpg" alt="Kiadi Mundi" />
                        <h5>Kiadi Mundi</h5>
                        <h6>Administrador</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                            est laborum</p>
                    </div>
                </div>
            </div>
       </main>
    )
}

export default NosotrosPage;