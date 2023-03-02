import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token) => {
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com' }
        };
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signin: async (email, password) => {
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com' },
            token: '123456789'
        };
        const response = await api.post('/signin', { email, password });
        return response.data;
    },
    logout: async () => {
        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    },
    login: async () =>{
     const res = await api.post(email,password)
     return res.data
    },
    getSobre: async () => {
        const res = await api('/paginas/1')
        return res.data
        return fetch(`${url}/paginas/1`)
    },

});





