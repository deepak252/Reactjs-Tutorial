import {useSelector, useDispatch} from "react-redux";
import { decrement, increment } from './counterSlice';

export function Counter(){
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <button  name="incr" onClick={()=>dispatch(increment())}>Increment</button>
            <h4>Count = {count}</h4>
            <button  name="decr" onClick={()=>dispatch(decrement())}>Decrement</button>
            <br />
            {/* <input type="text" placeholder="Enter value" value={value} onChange={handleValueChange} /> */}
            
        </div>
    )
}