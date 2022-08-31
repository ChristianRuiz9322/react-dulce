import React from "react";
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div class='contactorapido'>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre:</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Tu eMail: </label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Teléfono:</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje:</label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones">
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div class="datos">
                <h2>Otras vias de comunicación</h2>
                <ul>
                    <li><i class="fa-solid fa-phone"></i>  0392 154323242</li>
                    <li><i class="fa-solid fa-envelope"></i>  dulcementechily@gmail.com</li>
                    <li><i class="fa-brands fa-facebook"></i><a href="facebook.com/dulcementechily">  Facebook</a></li>
                    <li><i class="fa-brands fa-instagram"></i><a href="instagram.com/dulcementechily">  Instagram</a></li>
                </ul>
            </div>
        </main>
    )
}

export default ContactoPage;