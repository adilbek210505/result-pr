import React from 'react';
import {useAppDispatch, useAppSelector} from "../../Hooks";
import {getOrderREC} from "../../Store/Reducers/ActionCreators/OrderCreators";


const Menu = () => {
    const {menu} = useAppSelector(s => s.BasketReducer)
    const dispatch = useAppDispatch()


    return (
        <div>
            <div className="flex items-center justify-evenly flex-wrap">
                {
                    menu.map(el => (
                        <div className="border-2 flex m-2 flex-col items-center justify-evenly border-black w-[300px] h-[480px]">
                            <img width={250} src={el.image} alt=""/>
                            <h1 className="text-lg font-bold">{el.title}</h1>
                            <h1 className="text-xl font-mono">{el.price} $</h1>
                            <button onClick={() => dispatch(getOrderREC(el))} className="text-blue-700 w-[90%] hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                                order
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Menu;