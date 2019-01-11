import React, {Component} from "react";
import './bookitemstyle.css'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class BookItem extends Component{
    render(){
        const {booksAll}=this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">1</h3>
                    <p className="card-text">Ocena: 4.5</p>
                    <a href="#" className="btn btn-primary">Zobacz</a>
                </div>
            </div>
        );
    }
}

export default BookItem;