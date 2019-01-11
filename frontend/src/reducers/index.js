import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import booksAllReducer from "./booksAllReducer";

export default combineReducers({
    categorie: categoriesReducer,
    booksAll: booksAllReducer
});