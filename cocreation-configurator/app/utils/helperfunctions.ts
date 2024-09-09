import { designmethodstype } from "./designmethods"




export const removefunction = (allmethods:designmethodstype[], methodoptions:string[]) => {
    return allmethods.filter(method => !methodoptions.includes(method.name))
}