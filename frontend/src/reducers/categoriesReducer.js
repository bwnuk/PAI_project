import {GET_CATEGORIES} from "../actions/types";

const initialState ={
    categorie: []
};

export default function (state = initialState, action) {
    switch (action.type){
        case GET_CATEGORIES:
            return{
                ...state,
                categorie: action.payload
            };
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
        default:
            return state;
    }
}