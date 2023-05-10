import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChildTypes} from "../../Types/ChildTypes";
// @ts-ignore
import uniqId from 'uniqid';

export const initialStateValue: IChildTypes = {
    value: {
        title: "",
        price: "",
        image: "",
        id: 1
    },
    files: "",
    basket: [],
    mode: false,
    upDate: false
}
export const ChildReducer = createSlice({
    name: "CHILD",
    initialState: initialStateValue,
    reducers: {
        setValues(state,action: PayloadAction<any>) {
            state.value = action.payload
        },
        setFiles(state,action: PayloadAction<any>) {
            state.files = action.payload
        },
        addToBasket(state,{payload}: PayloadAction<any>) {
            const newProduct = {
                title: payload.title,
                price: payload.price,
                image: state.files,
                id: uniqId()
            }
            state.basket = [{...newProduct}]
        },
        getMode(state,action: PayloadAction<boolean>) {
            state.mode = action.payload
        },
        getUpDate(state,{payload}: PayloadAction<boolean>) {
            state.upDate = payload
        }
    }
})

export const {setValues,setFiles,addToBasket,getMode,getUpDate} = ChildReducer.actions
export default ChildReducer.reducer