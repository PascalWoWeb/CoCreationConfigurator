"use client"
import { desingmethodsarray } from "../utils/designmethods";
import Method from "../components/Method";
import "../css/methodspage.css"
 import { useEffect } from "react";
 

 

const Page = () => {

    

    useEffect(() => {

        console.log(desingmethodsarray.map((item) => item.name) )
    },[])
    return(
        <>
  
        {/* <div className="grid-container">

            {desingmethodsarray.map((item) =>{
         
                    return(<Method props={item} key={item.name}/>)

            }
                   
          



            )}
    
            
        </div> */}
 
        </>
    )
}

export default Page;