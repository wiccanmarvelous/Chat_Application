import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth'
import userReducer from './user'
import navReducer from './nav'
import routesReducer from './routeshistory'

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        nav: navReducer,
        routes: routesReducer
    }
});

export default store;