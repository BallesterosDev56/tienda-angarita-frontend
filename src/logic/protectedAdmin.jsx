import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import { useAdmin } from "./adminContext";

export const ProtectedAdmin =  ({children})=>{
    const {adminState} = useAdmin(); 
    
    if(!adminState) {
        return(
            <NotFoundPage></NotFoundPage>
        )
    }
    
    return children;
}