import React, {Component} from "react";
import './bookitemstyle.css'

class BookItem extends Component{
    render(){
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Tytuł książki</h3>
                    <p className="card-text">Ocena: 4.5</p>
                    <a href="#" className="btn btn-primary">Zobacz</a>
                </div>
            </div>
        );
    }
}

export default BookItem;