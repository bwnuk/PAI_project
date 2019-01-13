import axios from "axios";
import { GET_ID_CAT} from "./types";
/*
export const getCategorie = ({c_id}) => {
    return(dispatch) =>{
        return axios.get(`http://localhost:8080/api/categories/${c_id}`)
            .then(response => {
                dispatch(
            }).catch(error => {
            throw(error);});
    };
};*/

export const getSingle=() => async dispatch =>{
    try {
        const res = axios.get.then(`http://localhost:8080/api/categories/1`).catch(console.log(Response.error()));
        dispatch({
            type: GET_ID_CAT,
            payload: res.data
        });
    }catch (e) {
        console.log(e);
        console.log(Response.error());

    }
};