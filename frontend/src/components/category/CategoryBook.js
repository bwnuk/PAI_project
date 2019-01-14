/* eslint-disable no-template-curly-in-string */
import React, {Component} from "react";
import '../../index.css'
import axios from "axios/index";
import BookList from "../book/BookList";

class CategoryBook extends Component{
    state ={
        books: null
    };

    componentDidMount() {
        this.request();
    }

    request = async () =>{
        const {cateid} = this.props.match.params;
        await axios.get("http://localhost:8080/api/categories/books/"+cateid)
            .then(res =>{this.setState({books: res.data});})
            .catch(error => {console.log(error)});
    };

    render(){
        if(!this.state.books){
            return(
                <div><a>RAZ</a>
                </div>
            );
        }else {
            console.log(this.state.books);
            const books = this.state.books;
            return(
                <div>
                    <BookList books={books}/>
                </div>
            );
        }

    }
}
export default CategoryBook;
