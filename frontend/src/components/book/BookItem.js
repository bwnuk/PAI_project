import React, {Component} from "react";
import './bookitemstyle.css';


export const BookItem = ({booktitlem}) =>{
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{booktitlem}</h4>
                <p className="card-text"><b>Autor:</b> dwa </p>
                <p className="card-text"><b>Wydawnictwo:</b> raz</p>
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