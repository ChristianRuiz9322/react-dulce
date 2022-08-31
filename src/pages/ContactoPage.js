import React from "react";
import '../styles/components/pages/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        })); 
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto}`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">
            <div class='contactorapido'>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label for="nombre">Nombre:</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="email">Tu eMail: </label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="telefono">Teléfono:</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje:</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                    </p>
                    {sending ? <p>enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
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