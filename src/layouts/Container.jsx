import { Outlet } from 'react-router-dom';
import Header from './Header';


// =============== < Function > =============== //
export default function Container() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}