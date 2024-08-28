import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Redirect = ()=> {
    let navigate = useNavigate();

    return(
        useEffect(()=>{
            navigate('/tienda-angarita/login')
        })
    )
}