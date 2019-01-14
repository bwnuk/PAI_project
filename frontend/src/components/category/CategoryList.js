import React, {Component} from "react";
import '../../index.css'
import CategoryItem from "./CategoryItem";

class CategoryList extends Component{

    mapToItem= categorie =>{
        const catid = categorie.id;
        const catname = categorie.name;
        return<CategoryItem key={catid} catname={catname}/>
    };

    render(){
        return(
            <div className="center">
                {this.props.categories.map(this.mapToItem)}
            </div>
        );
    }
}
export default CategoryList;