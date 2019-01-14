import React, {Component} from "react";
import '../../index.css'
import axios from "axios/index";
import CategoryList from "./CategoryList"

class CategoriesComponent extends Component {
    state ={
        categories: []
    };

    componentDidMount() {
        this.request()
    }

    request = async () =>{
        await axios.get("http://localhost:8080/api/categories/all")
            .then(res =>{this.setState({categories: res.data});})
            .catch(error => {console.log(error)});
    };

    render() {
        if(!this.state.categories) {
            return (
                <div><a>RAZ</a></div>
            );
        }else {
            const categories = this.state.categories;
            return(
                <div><CategoryList categories={categories}/></div>
            );
        }
    }
}
export default CategoriesComponent;