import { useEffect } from 'react'
import { Cards } from '../../../components/cards/Cards'
import { Header } from '../../../components/header/header'
import './home.css'
import { useAuth } from '../../../logic/authContext'
import { useAdmin } from '../../../logic/adminContext'
import { HomeAdmin } from '../../Admin/home/HomeAdmin'


export const Home = ()=> {
    const {login, logout, isAuthenticated} = useAuth();
    const {adminState} = useAdmin();
    

    useEffect(()=>{
        if(isAuthenticated) {
            login();
        } else {
            logout();
        }
    }, [])

    if(adminState) {
        return(
            <HomeAdmin></HomeAdmin>
        )
    } else {
        return(
            <>
                <Header></Header>
                <Cards></Cards>
            </>
        )
    }
}