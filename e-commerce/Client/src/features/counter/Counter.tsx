import { Button, ButtonGroup, Typography } from "@mui/material";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export default function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispacth = useAppDispatch();
    return (   
        <>
            <Typography>{count}</Typography>
            <ButtonGroup>
                <Button onClick={() => dispacth(increment())}>increment</Button>
                <Button onClick={() => dispacth(decrement())}>decrement</Button>
                <Button onClick={() => dispacth(incrementByAmount(5))}>incrementByAmount</Button>
            </ButtonGroup>
        </>
    );
}