import {appDispatch} from "../../index";
import {addToBasket} from "../ChildSlice";
import {getManu} from "../BasketSlice";


export const getBasketREC = (el: any) => (dispatch: appDispatch) => {
   dispatch(addToBasket(el))
}

export const getMenuREC = (el: any) => (dispatch: appDispatch) => {
   dispatch(getManu(el))
}
