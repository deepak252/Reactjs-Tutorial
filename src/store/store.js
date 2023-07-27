import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import profileReducer from '../features/profile/profileSlice';
import createSagaMiddleware from "redux-saga";
import {profileSaga} from "../features/profile/profileSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer : {
        counter : counterReducer,
        profile : profileReducer
    },
    middleware : [sagaMiddleware]
});

sagaMiddleware.run(profileSaga);
