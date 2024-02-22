import axios from "../config/axios";

export const updateUser = user => axios.patch('/users', user);

export const getTargetUserProfile = targetUserId => 
axios.get(`/users/${targetUserId}/me`);