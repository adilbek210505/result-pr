import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBasketTypes} from "../../Types/BasketTypes";


const initialState: IBasketTypes = {
    menu: []
}
export const BasketReducer = createSlice({
    name: "BASKET",
    initialState,
    reducers: {
        getManu(state,{payload}: PayloadAction<any>) {
            state.menu = [...state.menu, {...payload}]
        }
    }
})

export const {getManu} = BasketReducer.actions
export default BasketReducer.reducer