import React from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../Hooks";

const Header = () => {
    const {menu} = useAppSelector(s => s.BasketReducer)
    const {order} = useAppSelector(s => s.OrdersReducer)

    const fount = order.reduce((acc,el) => {
        return acc + el.quantity
    }, 0)

    return (
        <div className="py-5 flex justify-between ">
            <div>
                log
            </div>
            <div className="w-[300px] font-bold text-lg flex justify-between">
                <Link to={"/"}>
                    admin
                </Link>
                <Link to={"/menu"}>
                    menu
                    <div style={{opacity: menu.length === 0 ? "0" : "1", transition: ".5s"}} className="absolute top-1 text-[16px] w-[20px] h-[20px] rounded-2xl bg-red-600 flex items-center justify-center pb-1 right-[20.5%]">
                        {menu.length}
                    </div>
                </Link>
                <Link to={"/orders"}>
                    orders
                    <h1 style={{opacity: order.length === 0 ? "0" : "1", transition: ".5s"}} className="absolute top-1 text-[16px] w-[20px] h-[20px] rounded-2xl bg-red-600 flex items-center justify-center pb-1 right-[12.5%]">{fount}</h1>
                </Link>
            </div>
        </div>
    );
};

export default Header;