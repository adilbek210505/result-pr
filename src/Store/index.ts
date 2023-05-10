import {combineReducers, configureStore} from "@reduxjs/toolkit";
import BasketReducer from "./Reducers/BasketSlice";
import ChildReducer from "./Reducers/ChildSlice";
import OrdersReducer from "./Reducers/OrdersSlice";


const rootState = combineReducers({
    BasketReducer,
    ChildReducer,
    OrdersReducer
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootState
    })
}


export type rootReducer = ReturnType<typeof rootState>
type appState = ReturnType<typeof setUpStore>
export type appDispatch = appState['dispatch']