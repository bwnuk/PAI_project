import React from "react";
import './bookitemstyle.css';

export const BookItem = ({booktitlem, authorfname, authorsname, publisher}) =>{
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{booktitlem}</h4>
                <p className="card-text"><b>Autor:</b> {authorfname} {authorsname} </p>
                <p className="card-text"><b>Wydawnictwo:</b> {publisher}</p>
                <p className="card-text"><b>Ocena:</b>4.5</p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div>
        </div>
    );
};

export default BookItem;