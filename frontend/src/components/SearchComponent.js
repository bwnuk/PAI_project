import React, {Component} from "react";
import './searchstyle.css'

class SearchComponent extends Component{
    constructor(){
        super();
        this.state = {
            author: "",
            title: "",
            publisher: ""
        };
        this.onChange= this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault()
        const newSearch = {
            author: this.state.author,
            title: this.state.title,
            publisher: this.state.publisher
        };
        console.log(newSearch);
    }

    render(){
        return(
            <div className="center">
                <div className="form-signin">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Autor:</label>
                            <input type="text" className="form-control" id="author"
                                   value={this.state.author}
                                   placeholder="np. Stephen King"
                                   onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Tytuł:</label>
                            <input type="text" className="form-control" id="title"
                                   value={this.state.title}
                                   placeholder="np. wie wieże"
                                   onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Wydawnictwo:</label>
                            <input type="text" className="form-control" id="publisher"
                                   value={this.state.publisher}
                                   placeholder="np. Helion"
                                   onChange={this.onChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Szukaj</button>
                    </form>
                </div>

            </div>
        );
    }

}
export default SearchComponent;