import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './CounterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();

    return (
      <div>
        <h1>Counter</h1>
        <button onClick={() => dispatch(decrement(5))}>-</button>
        {count}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    );
}

export default Counter;
