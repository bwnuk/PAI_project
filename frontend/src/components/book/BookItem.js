import React from "react";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './bookitemstyle.css';
import axios from "axios";

export const BookItem = ({bookkey, booktitle, authorfname, authorsname, publisher, booksum}) =>{

    return (
        <div className="card">
            <div className="card-body">
                <img className="card-img-top" src={"/images/"+booktitle+".jpg"} width="100" height="200" alt="Card image cap"/>
                <h5 className="card-title">{booktitle}</h5>
                <p className="card-text"><b>Autor:</b> {authorfname} {authorsname} </p>
                <p className="card-text"><b>Wydawnictwo:</b> {publisher}</p>
                <p className="card-text"><b>Ocena: </b>{booksum}</p>
                <Rater total={5} rating={1} onRate={({rating})=>{
                    axios.post("http://localhost:8080/api/rates/add/"+rating+"/"+bookkey+"/1").then(function(response) {
                        console.log(response);
                    }) .catch(function (error) {
                        console.log(error);
                    });
                }}/>
            </div>
        </div>
    );
};

export default BookItem;