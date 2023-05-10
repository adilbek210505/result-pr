import React from 'react';
import {useAppDispatch, useAppSelector} from "../../Hooks";
import {getFiles, getModeREC, getUpDateREC, getValue} from "../../Store/Reducers/ActionCreators/ChildCrearots";
import {getBasketREC, getMenuREC} from "../../Store/Reducers/ActionCreators/BasketCreators";

const Admin = () => {
    const {value,basket,mode,upDate} = useAppSelector(s => s.ChildReducer)
    const dispatch = useAppDispatch()

    const fileReader: any = new FileReader()

    fileReader.onloadend = () => {
        dispatch(getFiles(fileReader.result))
    }

    const handleChane = (e: React.ChangeEvent<any>) => {
        dispatch(getValue({...value, [e.target.name]: e.target.name !== "image" ? e.target.value : fileReader.readAsDataURL(e.target.files[0])}))
    }

    const handleClick = () => {
        if (value.title !== "" && value.price !== "") {
            dispatch(getModeREC(false))
            dispatch(getBasketREC(value))
            dispatch(getUpDateREC(true))
            dispatch(getValue({title: "", price: "", image: ""}))
        } else {
            dispatch(getModeREC(true))
        }
    }
    const handleClickMenu = (el: any) => {
        dispatch(getMenuREC(el))
        dispatch(getUpDateREC(false))
    }

    return (
        <div className="py-20 flex items-center justify-between">
            <div className="border-2 flex flex-col items-center justify-evenly border-black w-[400px] h-[450px]">
                <input style={{border: mode ? value.title !== "" ? "2px solid green" :  "2px solid red" : ""}} onChange={handleChane} name={"title"} value={value.title} type="search" id="default-search" className="block w-[90%] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name product" required/>
                <input style={{border: mode ? value.price !== "" ? "2px solid green" :  "2px solid red" : ""}} onChange={handleChane} name={"price"} value={value.price} type="number" className="block w-[90%] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" required/>
                <input onChange={handleChane} name={"image"} value={value.image} type="file"/>
                <button onClick={handleClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Create
                    </span>
                </button>
            </div>
            <div style={{opacity: upDate ? "1" : "0", transition: ".5s"}} className="border-2 flex flex-col items-center justify-evenly border-black w-[350px] h-[550px]">
                {
                    basket.map(el => (
                        <div>
                            <img width={300} src={el.image} alt=""/>
                            <h1 className="text-lg font-bold py-2">{el.title}</h1>
                            <h1>{el.price} $</h1>
                            <button onClick={() => handleClickMenu(el)} className="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                </svg>
                                Buy now
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Admin;