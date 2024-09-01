import { createContext, useContext, useState } from "react";

//creamos el contexto global:
const adminContext = createContext();

//creamos el provider
export const AdminProvider = ({children})=> {
    let [adminState, setAdminState] = useState(false);

    const isAdmin = () => setAdminState(true);
    const isNotAdmin = () => setAdminState(false);

    return(
            <adminContext.Provider value={{adminState, isAdmin, isNotAdmin}}>
                {children}
            </adminContext.Provider>
    )
}

//creamos el custom hook que es con el que vamos a poder utilizar las funciones para el cambio del estado:
export const useAdmin = () => {
    let context = useContext(adminContext);
    return context;
    
}