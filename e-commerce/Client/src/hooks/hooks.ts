import { useDispatch, useSelector } from "react-redux";
import { AppDispact, RootState } from "../store/store";

//HOOK tanımı bağlantı kolaylığı için
export const useAppDispatch = useDispatch.withTypes<AppDispact>();
export const useAppSelector = useSelector.withTypes<RootState>();