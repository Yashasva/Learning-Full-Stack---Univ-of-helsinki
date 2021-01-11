import React,{ useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props)=>{
  const total = props.v1+props.v2+props.v3
  const average = (props.v1*props.w1 + props.v2*props.w2 + props.v3*props.w3)/total
  const positive = props.v1*100/total
  return(
    <div>
      <h1>statistics</h1>
      <p>good {props.v1}</p>
      <p>neutral {props.v2}</p>
      <p>bad {props.v3}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return(
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <Statistics v1={good} v2={neutral} v3={bad} w1={1} w2={0} w3={-1}/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

