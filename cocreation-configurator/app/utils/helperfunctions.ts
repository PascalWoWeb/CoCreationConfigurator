import { designmethodstype, desingmethodsarray} from "./designmethods"




export const removefunction = (allmethods:designmethodstype[], methodoptions:string[]) => {
    return allmethods.filter(method => !methodoptions.includes(method.name))
}

export const addfunction = (allmethods: designmethodstype[], name:string) => {
    
  const currentmethods = desingmethodsarray.filter((item) => item.name === name)  
  const filter = currentmethods.filter((e) => 
    !allmethods.some(element => element.name === e.name)
);
        return [...allmethods, ...filter];
}