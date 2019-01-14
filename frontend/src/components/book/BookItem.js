import React from "react";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export const BookItem = ({booktitle, authorfname, authorsname, publisher}) =>{
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{booktitle}</h4>
                <p className="card-text"><b>Autor:</b> {authorfname} {authorsname} </p>
                <p className="card-text"><b>Wydawnictwo:</b> {publisher}</p>
                <p className="card-text"><b>Ocena:</b>4.5</p>
                <Rater total={5} rating={1}/>
            </div>
        </div>
    );
};

export default BookItem;