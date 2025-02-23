import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/CounterSlice";
import usersReducer from '../components/users/UsersSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer
    }
})