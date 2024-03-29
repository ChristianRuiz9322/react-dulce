import React, { useEffect, useState } from "react";
import '../styles/components/pages/NovedadesPage.css';
import axios from "axios";
import NovedadItem from "./NovedadItem";

const NovedadesPage = (props) => {

        const [loading, setLoading] = useState(false);
        const [novedades, setNovedades] = useState([]);

        useEffect (() => {
            const cargarNovedades = async () => {
                setLoading(true);
                const response = await axios.get('http://localhost:3000/api/novedades');
                // const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades}`);
                setNovedades(response.data);
                setLoading(false);
            };

            cargarNovedades();
        }, []);

    return (
        <section className="holder">
            <h2>Noticias y recetas</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo}/>)
            )}
        </section>
    );
}

export default NovedadesPage;