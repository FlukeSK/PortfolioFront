import axios from "axios";

export const register = user => axios.post('/auth/register', user);
export const login = credential => axios.post('/auth/login', credential);
export const fetchMe = () => axios.get('/auth/me');
