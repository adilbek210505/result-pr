import {appDispatch} from "../../index";
import {addToOrders, decQuantity, deleteOrders} from "../OrdersSlice";


export const getOrderREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(addToOrders(el))
}


export const deleteOrderREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(deleteOrders(el))
}

export const decQuantityREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(decQuantity(el))
}

