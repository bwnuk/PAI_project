import React from "react";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './bookitemstyle.css';
import axios from "axios";
import ajax from "ajax";
import $ from "jquery";

export class BookItem extends React.Component{
    state ={
        sum: this.props.booksum
    };

    funAjax(){
        $.ajax({
            url:"http://localhost:8080/api/books/rate/"+this.props.bookkey,
            success: data => {
                console.log(data);
                this.setState({sum: data});
            },
        });
    };
    render(){
        const id = this.props.bookkey;
        return (
            <div className="card">
                <div className="card-body">
                    <img className="card-img-top" src={"/images/"+this.props.booktitle+".jpg"} width="100" height="200" alt="Card image cap"/>
                    <h5 className="card-title">{this.props.booktitle}</h5>
                    <p className="card-text"><b>Autor:</b> {this.props.authorfname} {this.props.authorsname} </p>
                    <p className="card-text"><b>Wydawnictwo:</b> {this.props.publisher}</p>
                    <p className="card-text"><b>Ocena:</b> { this.state.sum}</p>
                    <Rater total={5} rating={1} onRate={({rating})=>{
                        axios.post("http://localhost:8080/api/rates/add/"+rating+"/"+this.props.bookkey+"/1").then(function(response) {
                        }) .catch(function (error) {
                            console.log(error);
                        });
                        this.funAjax();
                    }}/>
                </div>
            </div>
        );
    }
}

export default BookItem;
