import './home.css'
import { Cards } from '../../../components/cards/Cards'
import { Header } from '../../../components/header/header'
import { Tab } from '../../../components/tab/Tab'


export const Home = ()=> {
    const adminState = sessionStorage.getItem('adminState');
    console.log(adminState);
    
  
    if(adminState === 'true') {
        console.log('into');
        
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

}