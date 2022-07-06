import React from "react";
import 'C:/Users/PC/Desktop/Christian/Diseño Web/Dulcemente Chily React/frontend/src/styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre:</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email:</label>
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
                <p>Tambien puedes comunicarte con nostoros usando los siguientes medios</p>
                <ul>
                    <li>Telefono</li>
                    <li>Mail</li>
                    <li>Facebook</li>
                    <li>Whatsapp</li>
                </ul>
            </div>
        </main>
    )
}

export default ContactoPage;