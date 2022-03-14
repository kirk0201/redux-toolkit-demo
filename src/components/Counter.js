import { Component } from "react";
import classes from "./Counter.module.css";
import { counterActions } from "../store";
import { useSelector, useDispatch, connect } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  /* Redux기본, Redux Toolkit(하나의 reducer만 존재할때) */
  // const counter = useSelector((state) => state.counter);
  // const show = useSelector((state) => state.counterShow);

  /* 두개 이상의 reducer가 존재할때 */
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.counterShow);

  /* Redux Toolkit 버전 */
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const incrementBy5 = () => {
    dispatch(counterActions.increase(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  /* 기본 Redux 버전 */
  // const toggleCounterHandler = () => {
  //   dispatch({ type: "TOGGLE" });
  // };

  // const incrementHandler = () => {
  //   dispatch({ type: "INCREMENT" });
  // };
  // const incrementBy5 = () => {
  //   dispatch({ type: "INCREMENTBY5", payload: 5 });
  // };
  // const decrementHandler = () => {
  //   dispatch({ type: "DECREMENT" });
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy5}>Increment + 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/* 클래스 컴포넌트 */
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
