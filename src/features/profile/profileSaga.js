import {takeEvery, put}  from "redux-saga/effects";
import { setProfile } from "./profileSlice";

function* fetchProfile(){
    // let data = yield fetch("http://localhost:3050/todo");
    // data = yield data.json();
    console.log("getProfile Saga getting...");

    yield delay(3000);

    console.log("getProfile Saga completed");

    yield put(setProfile({
        "name" : "deepak",
        "email" : "email",
        "phone" : "Phone"
    }));
}

const delay = (ms)=> new Promise(res => setTimeout(res, ms));

// Generator Function
export function* profileSaga(){
    console.log("profileSaga : ",setProfile().type);
    yield takeEvery(setProfile().type, fetchProfile);
}