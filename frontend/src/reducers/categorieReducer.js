import {GET_ID_CAT} from "../actions/types";

const initialState ={
    categorieSingle: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ID_CAT:
            return{
                ...state,
                categorieSingle: action.payload
            };
        default:
            return state;
    }
}