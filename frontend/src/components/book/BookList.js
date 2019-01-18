import * as React from "react";
import BookItem from "./BookItem";
import './bookitemstyle.css';

export class BookList extends React.Component{
    booksToBookItems = book => {
        const bookkey = book.id;
        const booktitle = book.title;
        const bookauthorfname = book.author.firstName;
        const bookauthorsname = book.author.surName;
        const bookpublisher = book.publisher.name;
        const booksum = book.sum;
        return <BookItem key={bookkey} bookkey={bookkey} booktitle={booktitle} authorfname={bookauthorfname}
                         authorsname={bookauthorsname} publisher={bookpublisher} booksum={booksum}/>
    };

    render(){
        return(
            <div className="center">
                {this.props.books.map(this.booksToBookItems)}
            </div>
        );
    }
}

export default BookList;