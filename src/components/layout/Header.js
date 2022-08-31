import React from "react";
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="holder-head">
                <img class="logo" src="../../img/img-logo.png" alt="logo" />
                {/* <h1>Dulcemente Chily | Repostería artesanal</h1> */}
            </div>
        </header>
    )
}

export default Header;