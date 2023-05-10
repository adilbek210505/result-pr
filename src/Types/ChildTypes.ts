export interface IChildTypes {
    value: Partial<TValue>
    files: string | ArrayBuffer | any
    basket: TValue[]
    mode: boolean
    upDate: boolean
}

export type TValue = {
    title: string
    price: string | number | any
    image: string
    id: number | string
    quantity?: any
}