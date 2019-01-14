import React, {Component} from "react";
import './searchstyle.css'
import axios from "axios/index";
import BookList from "./book/BookList";

class SearchComponent extends Component{
    constructor(){
        super();
        this.state = {
            author: "",
            title: "",
            publisher: "",
            books: null
        };
        this.onChange= this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const newSearch = {
            author: this.state.author,
            title: this.state.title,
            publisher: this.state.publisher
        };

        console.log(newSearch);

        if(this.state.title) {
            if(this.state.author) {
                var fields = this.state.author.split(" ");
                if(this.state.publisher){
                    this.requestAuthorTitlePublisher(this.state.title, fields[0], fields[1], this.state.publisher);
                }else {
                    this.requestAuthorTitle(this.state.title, fields[0], fields[1]);
                }
            }else {
                if(this.state.publisher){
                    this.requestTitlePublisher(this.state.title, this.state.publisher);
                }else {
                    this.request("http://localhost:8080/api/books/", this.state.title);
                }
            }
        }else if(this.state.publisher){
            if(this.state.author){
                var fields = this.state.author.split(" ");
                this.requestAuthorPublisher(this.state.publisher, fields[0], fields[1]);
            }else {
                this.request("http://localhost:8080/api/publishers/books/", this.state.publisher);
            }
        } else if(this.state.author){
            var fields = this.state.author.split(" ");
            this.requestAuthor(fields[0], fields[1]);
        }
    }

    request= async (url, szuk)=>{
        await axios.get(url+szuk)
            .then(res =>{this.setState({books: res.data});})
            .catch(error => {console.log(error)});
    };

    requestAuthor= async (szuk1, szuk2)=>{
        await axios.get("http://localhost:8080/api/authors/books/"+szuk1+"/"+szuk2)
            .then(res =>{this.setState({books: res.data});})
            .catch(error => {console.log(error)});
    };

    requestAuthorTitle= async (szuk1, szuk2, szuk3)=>{
        await axios.get("http://localhost:8080/api/authors/books/"+szuk1+"/"+szuk2+"/"+szuk3)
            .then(res =>{this.setState({books: res.data});})
            .catch(error => {console.log(error)});
    };

    requestAuthorPublisher= async (szuk1, szuk2, szuk3)=>{
        await axios.get("http://localhost:8080/api/publishers/authors/"+szuk1+"/"+szuk2+"/"+szuk3)
            .then(res =>{this.setState({books: res.data});})
            .catch(error => {console.log(error)});
    };

    requestAuthorTitlePublisher= async (szuk1, szuk2, szuk3, szuk4)=>{
        await axios.get("http://localhost:8080/api/authors/books/"+szuk1+"/"+szuk2+"/"+szuk3+"/"+szuk4)
            .then(res =>{this.setState({books: res.data});})
            .catch(error => {console.log(error)});
    };

    requestTitlePublisher= async (szuk1, szuk2)=>{
        await axios.get("http://localhost:8080/api/books/publishers/"+szuk1+"/"+szuk2)
            .then(res =>{this.setState({books: res.data});})
            .catch(error => {console.log(error)});
    };

    signView=()=>{
        return(
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
        );
    };


    render(){
        const books = this.state.books;

        if(!books) {
            return (
                <div className="center">
                    {this.signView()}
                </div>
            );
        }else {
            return(
                <div className="center">
                    {this.signView()}
                    <BookList books={books}/>
                </div>
            );
        }
    }

}
export default SearchComponent;