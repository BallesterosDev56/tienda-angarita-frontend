import { createContext, useContext } from "react";

//creamos el contexto global:
const adminContext = createContext();

//creamos el provider
export const AdminProvider = ({children})=> {

    const isAdmin = () => {
        let existItem = sessionStorage.getItem('adminState');
    
        if (existItem !== null) {
          sessionStorage.removeItem('adminState');
        }
        sessionStorage.setItem('adminState', 'true');
      }

      const isNotAdmin = () => {
        let existItem = sessionStorage.getItem('adminState');
    
        if (existItem !== null) {
          sessionStorage.removeItem('adminState');
        }
        sessionStorage.setItem('adminState', 'false');
      }

    return(
            <adminContext.Provider value={{isAdmin, isNotAdmin}}>
                {children}
            </adminContext.Provider>
    )
}

//creamos el custom hook que es con el que vamos a poder utilizar las funciones para el cambio del estado:
export const useAdmin = () => {
    let context = useContext(adminContext);
    return context;
    
}