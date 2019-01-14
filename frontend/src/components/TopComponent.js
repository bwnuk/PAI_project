import React, {Component} from "react";
import axios from "axios";
import "../index.css";
import BookList from "./book/BookList";

class TopComponent extends Component{
    state ={
        books: null
    };

    componentDidMount(){
        this.request();
    }

    request = async () =>{
        await axios.get("http://localhost:8080/api/books/all")
            .then(res =>{this.setState({books: res.data});})
            .catch(error => {console.log(error)});
    };

    render(){
        if(!this.state.books) {
            return (
                <div><a>RAZ</a></div>
            );
        }else {
            const books = this.state.books;
            return(
                <div><BookList books={books}/></div>
            );
        }
    }
}

export default TopComponent;