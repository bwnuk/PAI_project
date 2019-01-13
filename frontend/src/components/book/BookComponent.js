import React, {Component} from "react";
import '../../index.css'
<<<<<<< Updated upstream

class BookComponent extends Component{
=======
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { getSingle } from "../../actions/categorieSingleAction";

class BookComponent extends Component{
    componentDidMount(){
        this.props.getSingle();
    }
>>>>>>> Stashed changes
    render(){
        return(
            <div className="center">
            </div>
        );
    }
<<<<<<< Updated upstream
}
=======
}

BookComponent.propTypes = {
    getSingle: PropTypes.func.isRequired,
    categorieSingle: PropTypes.object.isRequired
};

const  mapStateToProps = state =>({
    categorieSingle: state.categorieSingle
});

export default connect(mapStateToProps, {getSingle})(BookComponent);
>>>>>>> Stashed changes
