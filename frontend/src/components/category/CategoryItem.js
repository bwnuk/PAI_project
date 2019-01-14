import React, {Component} from "react";
import './categoryitemstyle.css'
import { Link } from "react-router-dom";

export const CategoryItem =({catname}, {cateid})=>{
    const val = catname;
    return(
        <div>
            <Link className="btn btn-default btn-xl" to={"/categories/books/"+val}><a>{catname}</a></Link>
        </div>
    );
};

export default CategoryItem;