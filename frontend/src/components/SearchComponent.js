import React, {Component} from "react";
import '../index.css'

class SearchComponent extends Component{
    render(){
        return(
            <div className="center">
                <div className="form-signin">
                    <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Example label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                   placeholder="Example input"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Another label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                   placeholder="Another input"/>
                        </div>
                    </form>
                </div>

            </div>
        );
    }

}
export default SearchComponent;