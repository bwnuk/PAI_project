import { GET_BOOKS_ALL }from "../actions/types";

const initialState ={
  booksAll: []
};

export default function (state = initialState, action) {
    switch (action.type){
        case GET_BOOKS_ALL:
            return{
                ...state,
                booksAll: action.payload
            };
        default:
            return state;
    }
}