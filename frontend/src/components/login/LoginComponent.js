import React, {Component} from "react";
import './loginstyle.css'
import axios from "axios/index";

class LoginComponent extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        };
        this.onChange= this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            password: this.state.password
        };

        if(this.state.password && this.state.username){
            this.request();
        }
    }

    request = async () =>{
        await axios.post("http://localhost:8080/api/login",
            {
                username: this.state.username,
                password: this.state.password
            }).catch(error => {console.log(error)});
    };

    signView=()=>{
        return(
            <div className="form-signin">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Username:</label>
                        <input type="text" className="form-control" id="username"
                               value={this.state.username}
                               placeholder="Login"
                               onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Password</label>
                        <input type="password" className="form-control" id="password"
                               value={this.state.password}
                               placeholder="Password"
                               onChange={this.onChange}/>
                    </div>
                    <div className="form-group form-check">
                        <a href="/registration"> SIGN UP</a>
                    </div>
                    <button type="submit" className="btn btn-primary">Zaloguj</button>
                </form>
            </div>
        );
    };


    render(){
        return (
            <div className="center">
                {this.signView()}
            </div>
        );
    }
}

export default LoginComponent;