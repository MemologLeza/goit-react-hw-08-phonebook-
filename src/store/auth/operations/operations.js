import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem('token', token)
};
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
    localStorage.removeItem('token')
};

export const register = createAsyncThunk('auth/register',
    async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/signup', credentials)
        setAuthHeader(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    })
export const login = createAsyncThunk('auth/login',
    async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', credentials)
        setAuthHeader(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    })

    
export const logout = createAsyncThunk('auth/logout',
    async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout')
        clearAuthHeader()
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    })
export const refresh = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
    try {
        const token = localStorage.getItem('token')
        setAuthHeader(token)
        const {data}= await axios('/users/current')
        setAuthHeader(token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue('');
    }
    })