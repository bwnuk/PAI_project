import React from "react";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './bookitemstyle.css';

export const BookItem = ({booktitle, authorfname, authorsname, publisher}) =>{

    return (
        <div className="card">
            <div className="card-body">
                <img className="card-img-top" src={"/images/"+booktitle+".jpg"} width="100" height="200" alt="Card image cap"/>
                <h5 className="card-title">{booktitle}</h5>
                <p className="card-text"><b>Autor:</b> {authorfname} {authorsname} </p>
                <p className="card-text"><b>Wydawnictwo:</b> {publisher}</p>
                <p className="card-text"><b>Ocena: </b>4.5</p>
                <Rater total={5} rating={1} onRate={({rating})=>{
                    console.log(rating+ " " + booktitle);
                }}/>
            </div>
        </div>
    );
};

export default BookItem;