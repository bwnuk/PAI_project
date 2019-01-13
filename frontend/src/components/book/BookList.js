import * as React from "react";
import BookItem from "./BookItem";

export class BookList extends React.Component{

    booksToBookItems = book => {
        const bookkey = book.id;
        const booktitle = book.title;
        return <BookItem key={bookkey} booktitle={booktitle}/>
    };

    render(){
        return(
            <div>
                {this.state.books.map(this.booksToBookItems)}
            </div>
        );
    }
}

export default BookList;