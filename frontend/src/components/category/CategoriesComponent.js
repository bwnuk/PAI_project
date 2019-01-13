import React, {Component} from "react";
import '../../index.css'
import CategoryItem from "./CategoryItem"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../../actions/categorieAction";

class CategoriesComponent extends Component{
    componentDidMount(){
        this.props.getBacklog();
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


CategoriesComponent.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    categorie: PropTypes.object.isRequired
};

const  mapStateToProps = state =>({
    categorie: state.categorie
});

export default connect(mapStateToProps, {getBacklog})(CategoriesComponent);