import React, {Component} from "react";
import '../index.css'
import BookItem from "./book/BookItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBookslog }from "../actions/booksAllAction";

class TopComponent extends Component{
    componentDidMount(){
        this.props.getBookslog();
    }
    render() {
        const {booksAll} = this.props.booksAll;

        let BooksAlgo;
        let books = [];

        const Books = booksAll =>{
            const book = booksAll.map(booksAll => (<BookItem key={booksAll.id} booksAll={booksAll}/>));

            for(let i = 0; i<book.length; i++)
                books.push(book[i]);

            return(
                <React.Fragment>
                    <div className="center">
                        {books}
                    </div>
                </React.Fragment>
            );
        };

        BooksAlgo = Books(booksAll);

        return (
            <div>
                {BooksAlgo}
            </div>
        );
    }
}

TopComponent.PropTypes = {
    getBookslog: PropTypes.func.isRequired,
    booksAll: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    booksAll: state.booksAll
});

export default connect(mapStateToProps, { getBookslog }) (TopComponent);