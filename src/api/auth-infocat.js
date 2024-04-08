import axios from "../config/axios";

export const fetchCat = () => axios.get('/auth/infocat');

export const fetchCatDelete = (id) => axios.delete(`/auth/deleteCardCat/${id}`);    