import React, {Component} from "react";
import '../../index.css'
import CategoryItem from "./CategoryItem"


class CategoriesComponent extends Component{
    componentDidMount(){

    }
    render(){
        const {categorie} = this.props.categorie;

        let CategoriesAlgo;
        let categories = [];

        const Categories = categorie =>{
            const cat = categorie.map(categorie => (<CategoryItem key={categorie.id} categorie={categorie}/>));
            for(let i = 0; i< cat.length; i++)
                categories.push(cat[i]);
            return(
                <React.Fragment>
                    <div className="center">
                        {categories}
                    </div>
                </React.Fragment>);
        };

        CategoriesAlgo = Categories(categorie);
        return(
            <div>
                {CategoriesAlgo}
            </div>
        );
    }
}

export default CategoriesComponent;