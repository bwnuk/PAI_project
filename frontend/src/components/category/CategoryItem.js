import React, {Component} from "react";
import '../../index.css'
import CategoryBook from "./CategoryBook";

export const CategoryItem =({catname}, {cateid})=>{
    return(
        <div>
            <button type="button" className="btn btn-default btn-xl" onClick={<CategoryBook catid={cateid}/>}>{catname}</button>
        </div>
    );
};

export default CategoryItem;