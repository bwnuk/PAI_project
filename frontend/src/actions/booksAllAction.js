import axios from "axios";
import { GET_BOOKS_ALL } from "./types";

export const getBookslog = () => async dispatch=>{
    const res = await axios.get("http://localhost:8080/api/books/all")
    dispatch({
        type: GET_BOOKS_ALL,
        payload: res.data
    })
}