import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth'
import userReducer from './user'
import navReducer from './nav'
import routesReducer from './routeshistory'
import socketReducer from './socket'
import messagesRouter from './messages'

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        nav: navReducer,
        routes: routesReducer,
        socket: socketReducer,
        messages: messagesRouter
    }
});

export default store;