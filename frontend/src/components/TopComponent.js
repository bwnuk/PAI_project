import * as React from "react";
import axios from "axios";
import '../index.css'
import {BookList} from "./book/BookList";


class TopComponent extends React.Component{
    componentDidMount (){
        this.requestMethod()
    }

    constructor(props){
        super(props);
        this.state = {books: null}
    }

    requestMethod =async () => {
        console.log("MMM");
        await axios.get("http://localhost:8080/api/books/all")
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {console.log(error)});
        console.log(this.state.books);
    };

    render() {
        while(!this.state.books)
            this.requestMethod();
        console.log("TEST RENDER");
        const books = this.state.books;
        console.log(books);
        console.log("RAZ");
            return(
                <div>
                    <BookList books={books}/>
                </div>
            );
    }
}

export default TopComponent;