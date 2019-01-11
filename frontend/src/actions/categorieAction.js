import axios from "axios";
import {GET_CATEGORIES} from "./types";

export const getBacklog = () => async dispatch =>{
    const res = await axios.get("http://localhost:8080/api/categories/all")
    dispatch({
        type: GET_CATEGORIES,
        payload: res.data
    })
}