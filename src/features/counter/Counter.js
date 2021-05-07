import React, { PureComponent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  asyncCallApi,
} from './counterSlice';
import styles from './Counter.module.css';
import { connect } from 'react-redux';

// export function Counter() {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

//   const incrementValue = Number(incrementAmount) || 0;

//   return (
//     <div>
//       <div className={styles.row}>
//         <button
//           className={styles.button}
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           -
//         </button>
//         <span className={styles.value}>{count}</span>
//         <button
//           className={styles.button}
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           +
//         </button>
//       </div>
//       <div className={styles.row}>
//         <input
//           className={styles.textbox}
//           aria-label="Set increment amount"
//           value={incrementAmount}
//           onChange={(e) => setIncrementAmount(e.target.value)}
//         />
//         <button
//           className={styles.button}
//           onClick={() => dispatch(incrementByAmount(incrementValue))}
//         >
//           Add Amount
//         </button>
//         <button
//           className={styles.asyncButton}
//           onClick={() => dispatch(incrementAsync(incrementValue))}
//         >
//           Add Async
//         </button>
//         <button
//           className={styles.button}
//           onClick={() => dispatch(incrementIfOdd(incrementValue))}
//         >
//           Add If Odd
//         </button>
//       </div>
//     </div>
//   );
// }

class Counter extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    
    return(
      <div>
        Value of store {this.props.counter.value}
        <div>{this.props.counter.loading ? 'loading' : 'ok'}</div>
        <div>
          <div><input type="text" onChange={(e) => this.props.withValue(e.target.value)}/></div>
          
          <button onClick={()=> this.props.propsStartAsync(10)}>start async</button>
          <button onClick={()=> this.props.increment()}>+</button>
          <button onClick={()=> this.props.decrement()}>-</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter : state.counter
  }
}

const mapActionToProps = (dispatch) => ({
  increment : () => {
    dispatch({type : "Increment"})
  },
  decrement : () => {
    dispatch({type : "Decrement"})
  },
  withValue : (data) => {
    dispatch({type:"withValue", data:data})
  },
  propsStartAsync : (data) => {
    dispatch(asyncCallApi(data))
  }
})

export default connect(mapStateToProps, mapActionToProps)(Counter)