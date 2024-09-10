import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

export const ProtectedAdmin =  ({children})=>{
    const adminState = sessionStorage.getItem('adminState');
    
    if(adminState === 'false') {
        return(
            <NotFoundPage></NotFoundPage>
        )
    }
    
    return children;
}