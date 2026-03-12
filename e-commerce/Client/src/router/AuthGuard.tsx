import { Navigate, Outlet, useLocation } from "react-router";
import { useAppSelector } from "../store/store";

export default function AuthGuard()
{
    //USer bilgisini alalım useappselector
    const {user} = useAppSelector(state => state.account);
    const location = useLocation();//gitmek istenen yeri hatırlamk için

    if(!user){
        return <Navigate to="login" state={{from: location}}/>
    }
    return <Outlet/>
}