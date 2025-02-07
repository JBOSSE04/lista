import {Navigate, Outlet} from 'react-router-dom';
export function RutasPrivadas()
{
    let auth = true;

    return (
        auth? <Outlet />: <Navigate to="/"/> 
    );

}