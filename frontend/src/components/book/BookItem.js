import React, {Component} from "react";
import './bookitemstyle.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class BookItem extends Component{
    render(){
        const {booksAll} =this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{booksAll.title}</h4>
                    <p className="card-text"><b>Autor:</b> {booksAll.author.firstName} {booksAll.author.surName}</p>
                    <p className="card-text"><b>Wydawnictwo:</b> {booksAll.publisher.name}</p>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
            </div>
        );
    }
}

export default BookItem;