import {appDispatch} from "../../index";
import {getMode, getUpDate, setFiles, setValues} from "../ChildSlice";


export const getValue = (value: string | number | any) => (dispatch: appDispatch) => {
    dispatch(setValues(value))
}
export const getFiles = (file: any) => (dispatch: appDispatch) => {
    dispatch(setFiles(file))
}

export const getModeREC = (mode: boolean) => (dispatch: appDispatch) => {
    dispatch(getMode(mode))
}

export const getUpDateREC = (mode: boolean) => (dispatch: appDispatch) => {
    dispatch(getUpDate(mode))
}