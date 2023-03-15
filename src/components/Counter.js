import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  console.log(counter);
  const show = useSelector(state => state.counter.ShowCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const IncrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const DecrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const IncreaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={IncreaseHandler}>Increment By 15</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
