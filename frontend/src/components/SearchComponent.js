import React, {Component} from "react";
import './searchstyle.css'

class SearchComponent extends Component{
    render(){
        return(
            <div className="center">
                <div className="form-signin">
                    <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Autor:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                   placeholder="Stephen King"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Tytuł:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                   placeholder="Dwie wieże"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Wydawnictwo:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                   placeholder="Helion"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Szukaj</button>
                    </form>
                </div>

            </div>
        );
    }

}
export default SearchComponent;