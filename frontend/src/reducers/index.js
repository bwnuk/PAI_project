import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
<<<<<<< Updated upstream
=======
import categorieReducer from "./categorieReducer";
>>>>>>> Stashed changes
import booksAllReducer from "./booksAllReducer";

export default combineReducers({
    categorie: categoriesReducer,
<<<<<<< Updated upstream
    booksAll: booksAllReducer
=======
    booksAll: booksAllReducer,
    categorieSingle: categorieReducer
>>>>>>> Stashed changes
});