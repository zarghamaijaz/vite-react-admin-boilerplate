import { BASE_URL } from './constent';
import request from './request';

export const GetUsersApi = () => request({
    url: `https://jsonplaceholder.typicode.com/users`,
    method: 'GET',
});
export const GetSomethingApi = () => request({
    url: `${BASE_URL}/something`,
    method: 'GET',
});
export const PostSomethingApi = (data) => request({
    url: `${BASE_URL}/something`,
    method: 'POST',
    data,
});