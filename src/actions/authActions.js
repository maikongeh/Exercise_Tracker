import axios from 'axios';
import {returnErrors} from './errorActions';

import {USER_LOADED, USER_LOADING, AUTH_ERROR, 
    LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS,
    REGISTER_SUCCESS, REGISTER_FAIL} from './types';

//Check token and load user

export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING});

    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-type" : "application/json"
        }
    }

    if(token) {
        config.headers['x-auth-token'] = token;
    }

    axios.get('http://localhost:8000/auth/user', tokenConfig(getState))
        .then(res => dispatch({type: USER_LOADED, payload: res.data}))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({type: AUTH_ERROR});
        });   
}

//Register user

export const register = ({name, email, password}) => dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({name, email, password});

    axios.post('http://localhost:8000/user/add', body)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTRATION_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            });
        });
}

export const tokenConfig = getState => {
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-type" : "application/json"
        }
    }

    if(token) {
        config.headers['x-auth-token'] = token;
    }

    return config
}