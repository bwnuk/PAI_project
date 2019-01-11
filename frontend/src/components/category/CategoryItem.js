import React, {Component} from "react";
import '../../index.css'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CategoryItem extends Component{
    render(){
        const {categorie}=this.props;
        return(
            <div>
                <button type="button" className="btn btn-default btn-xl">{categorie.name}</button>
            </div>
        );
    }
}
export default CategoryItem;