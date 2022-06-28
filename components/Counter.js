import { useSelector, useDispatch } from "react-redux";
// import { decrement, getData, increment } from "../redux/slices/counterSlice";
import { decrement,getData } from "../redux/slices/counterSlice";


export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => {
            console.log('increment value')
            dispatch(getData());
             }}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => 
            
            {
              console.log('decrement value')
              dispatch(decrement()) 
            }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
