import React, {Component} from "react";
import '../../index.css'

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