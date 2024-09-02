import { useEffect } from 'react'
import { Cards } from '../../../components/cards/Cards'
import { Header } from '../../../components/header/header'
import './home.css'
import { useAuth } from '../../../logic/authContext'
import { useAdmin } from '../../../logic/adminContext'
import NotFoundPage from '../../notFoundPage/NotFoundPage'
import { Tab } from '../../../components/tab/Tab'


export const Home = ()=> {
    const {isAuthenticated} = useAuth();
    const {adminState} = useAdmin();
  
    if(isAuthenticated) {
        if(adminState) {
            return(
                <>
                    <Header></Header>
                    <Tab></Tab>
                    <Cards></Cards>
                </>
            )
        } else {
            return(
                <>
                    <Header></Header>
                    <Cards></Cards>
                </>
            )
        }
    } else {
        return(
            <NotFoundPage></NotFoundPage>
        )
    }

}