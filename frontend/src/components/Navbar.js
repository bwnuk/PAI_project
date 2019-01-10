import React from "react";

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" align="center" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" data-target="#myModal" data-toggle="modal">TOP <span
                            className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-target="#myModal" data-toggle="modal">Kategorie</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" data-target="#myModal" data-toggle="modal">Szukaj</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}