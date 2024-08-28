import { useEffect } from 'react'
import { Cards } from '../../../components/header/cards/Cards'
import { Header } from '../../../components/header/header'
import './home.css'
import { useAuth } from '../../../logic/authContext'


export const Home = ()=> {
    const {login, logout, isAuthenticated} = useAuth();

    useEffect(()=>{
        if(isAuthenticated) {
            login();
        } else {
            logout();
        }
    }, [])

    return(
        <>
            <Header></Header>
            <Cards></Cards>
        </>
    )
}