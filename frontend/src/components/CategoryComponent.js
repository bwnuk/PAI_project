import React, {Component} from "react";
import '../index.css'

class CategoryComponent extends Component{
    render(){
        return(
            <div className="center">
                <button type="button" className="btn btn-default btn-xl">Fantastyka</button>
                <button type="button" className="btn btn-default btn-xl">Dramat</button>
                <button type="button" className="btn btn-default btn-xl">Biograficzne</button>
                <button type="button" className="btn btn-default btn-xl">Kryminał</button>
                <button type="button" className="btn btn-default btn-xl">Popularnonaukowe</button>
                <button type="button" className="btn btn-default btn-xl">Historyczna</button>
                <button type="button" className="btn btn-default btn-xl"></button>
                <button type="button" className="btn btn-default btn-xl"></button>
                <button type="button" className="btn btn-default btn-xl"></button>
            </div>
        );
    }
}

export default CategoryComponent;