import React from "react";
import '../styles/components/pages/NovedadItem.css';

const NovedadItem = (props) => {
    const {title, subtitle, imagen, body } = props;

    return (
        <div className="novedades">
            <h1>{title} </h1>
            <h2>{subtitle} </h2>
            <img alt="imagen" src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body}}/>
            <hr/>
        </div>
    );
}

export default NovedadItem;