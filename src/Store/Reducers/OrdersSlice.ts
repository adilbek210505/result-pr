import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IOrderTypes} from "../../Types/OrderTypes";


const initialState: IOrderTypes = {
    order: []
}
export const OrdersReducer = createSlice({
    name: "ORDERS",
    initialState,
    reducers: {
        addToOrders(state,{payload}: PayloadAction<any>) {
            const fount = state.order.find(el => el.id === payload.id)
            if  (fount) {
                state.order = state.order.map(el => el.id === fount.id ? {...el, quantity: el.quantity +1} : el)
            } else {
                state.order = [...state.order, {...payload, quantity: 1}]
            }
        },
        deleteOrders(state,{payload}: PayloadAction<any>) {
            state.order = state.order.filter(el => el.id !== payload.id)
        },
        decQuantity(state,{payload}: PayloadAction<any>) {
            state.order = state.order.map(el => {
                if (el.id === payload.id) {
                    if (el.quantity > 1) {
                        return {...el, quantity: el.quantity -1}
                    } else return el
                } else return el
            })
        },
    }
})

export const {addToOrders,deleteOrders,decQuantity} = OrdersReducer.actions
export default OrdersReducer.reducer