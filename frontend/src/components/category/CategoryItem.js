import React, {Component} from "react";
import '../../index.css'

export const CategoryItem =({catname})=>{
    return(
        <div>
            <button type="button" className="btn btn-default btn-xl">{catname}</button>
        </div>
    );
};

export default CategoryItem;