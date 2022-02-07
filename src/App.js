import {useReducer} from "react";


const reducer = (state, action) => {
  switch (action.type){
    case 'inc':
      return {...state, count1:state.count1+1}
    case 'increase':
      return {...state, count2:state.count2+10}
    case 'Increase':
      return {...state, count3:state.count3+100}

    case 'dec':
      return {...state, count1:state.count1-1}
    case 'decrement':
      return {...state, count2:state.count2-10}
    case 'Decrement':
      return {...state, count3:state.count3-100}

    case 'res':
      return {...state, count1:0}
    case 'reset':
      return {...state, count2:0}
    case 'Reset':
      return {...state, count3:0}

  }
  return state
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count1:0, count2:10, count3:100});

  return (
    <div>
      <div>
        <div>{state.count1}</div>
        <button onClick={() => dispatch({type: 'inc'})}> INC</button>
        <button onClick={() => dispatch({type: 'dec'})}> DEC</button>
        <button onClick={() => dispatch({type: 'res'})}> RES</button>
      </div>
      <div>
        <div>{state.count2}</div>
        <button onClick={() => dispatch({type:'increase'})}> INC </button>
        <button onClick={() => dispatch({type:'decrement'})}> DEC </button>
        <button onClick={() => dispatch({type:'reset'})}> RES </button>
      </div>
      <div>
        <div>{state.count3}</div>
        <button onClick={() => dispatch({type:'Increase'})}> INC </button>
        <button onClick={() => dispatch({type:'Decrement'})}> DEC </button>
        <button onClick={() => dispatch({type:'Reset'})}> RES </button>
      </div>

    </div>
  );
}

export default App;
