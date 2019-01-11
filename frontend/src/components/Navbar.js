import React from "react";

export default function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="/top">Booker</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" align="center" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/top" data-target="#myModal" data-toggle="modal">TOP <span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/category" data-target="#myModal" data-toggle="modal">Kategorie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/search" data-target="#myModal" data-toggle="modal">Szukaj</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login" data-target="#myModal" data-toggle="modal">Zaloguj</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}