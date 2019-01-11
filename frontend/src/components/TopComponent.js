import React, {Component} from "react";
import '../index.css'
import Navbar from "./Navbar";
import BookItem from "./book/BookItem";

class TopComponent extends Component{
    render() {
        return (
            <div className="center">
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
            </div>
        );
    }
}
export default TopComponent;