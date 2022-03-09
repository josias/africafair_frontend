import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

// third-party
import { Chance } from 'chance';
import jwtDecode from 'jwt-decode';

// reducer - state management
import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';

// project imports
import Loader from 'ui-component/Loader';
import axiosServices from 'utils/axios';
import axios from 'utils/axios';

const chance = new Chance();

// constant
const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

const verifyToken = (serviceToken) => {
    if (!serviceToken) {
        return false;
    }
    const decoded = jwtDecode(serviceToken);
    /**
     * Property 'exp' does not exist on type '<T = unknown>(token: string, options?: JwtDecodeOptions | undefined) => T'.
     */
    return decoded.exp > Date.now() / 1000;
};

const setSession = (refreshToken, accessToken) => {
    if (refreshToken && accessToken) {
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('accessToken', accessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');

        delete axios.defaults.headers.common.Authorization;
    }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
// const JWTContext = (createContext < JWTContextType) | (null > null);

const JWTContext = createContext(null);

export const JWTProvider = ({ children }) => {
    const [state, dispatch] = useReducer(accountReducer, initialState);

    useEffect(() => {
        const init = async () => {
            try {
                const accessToken = window.localStorage.getItem('accessToken');
                const refreshToken = window.localStorage.getItem('refreshToken'); 
                //if (serviceToken && verifyToken(serviceToken)) {
                  if (accessToken) {  
                    setSession(refreshToken, accessToken);
                    console.log('accessToken ' + accessToken);
                    const {user_id} = jwtDecode(accessToken);

                    const response = await axios.get('/accounts/api/users/'+user_id);
                    const { user } = response.data;
                    console.log('Bingo ' + user);
                    dispatch({
                        type: LOGIN,
                        payload: {
                            isLoggedIn: true,
                            user
                        }
                    });
                } else {
                    dispatch({
                        type: LOGOUT
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: LOGOUT
                });
            }
        };

        init();
    }, []);

    const login = async (email, password) => {
        const response = await axios.post('/accounts/api/login/', { email, password });
        const { refresh, access } = response.data;
        console.log(refresh);
        console.log(access)
        const {user_id} =  jwtDecode(access);  
        const user = user_id;
       
        setSession(refresh, access);
        dispatch({
            type: LOGIN,
            payload: {
                isLoggedIn: true,
                user
            }
        });
    };

    const register = async (email, password, firstName, lastName) => {
        // todo: this flow need to be recode as it not verified
        
        const id = chance.bb_pin();
       
        const response = await axios.post('/account/registration/', {    
            
            email,
            password,
            firstName,
            lastName
        });
        let users = response.data;

        if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== '{"detail":"Confirmation email sent"}') {
            
            const localUsers = window.localStorage.getItem('users');

            users = [
                ...JSON.parse(localUsers),
                {
                    id,
                    email,
                    password,
                    name: `${firstName} ${lastName}`
                }
            ];
        }

        window.localStorage.setItem('users', JSON.stringify(users));
    };

    const logout = () => {
      //const logout = async() => {

        const localUsers = window.localStorage.getItem('users');
        console.log(window.localStorage);
        console.log(localUsers);

        setSession(null);
        dispatch({ type: LOGOUT });
    };

    const resetPassword = (email) => console.log(email);

    const updateProfile = () => {};

    if (state.isInitialized !== undefined && !state.isInitialized) {
        return <Loader />;
    }

    return (
        <JWTContext.Provider value={{ ...state, login, logout, register, resetPassword, updateProfile }}>{children}</JWTContext.Provider>
    );
};

JWTProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default JWTContext;
