import axios from "axios";
<<<<<<< Updated upstream
import {GET_CATEGORIES} from "./types";

export const getBacklog = () => async dispatch =>{
    const res = await axios.get("http://localhost:8080/api/categories/all")
=======
import { GET_CATEGORIES} from "./types";

export const getBacklog = () => async dispatch =>{
    const res = await axios.get("http://localhost:8080/api/categories/all");
>>>>>>> Stashed changes
    dispatch({
        type: GET_CATEGORIES,
        payload: res.data
    })
<<<<<<< Updated upstream
}
=======
};
>>>>>>> Stashed changes
