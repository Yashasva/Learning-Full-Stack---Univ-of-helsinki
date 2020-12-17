import React from 'react';
import ReactDOM from 'react-dom';

let part = []
let exercise = []

const Header = (props) => {
  return(
    <h1>{props.name}</h1>
  )
}

const Part = (props)=>{
  part.push(props.part)
  exercise.push(props.exercise)
  return(
    <tr>
      <td>{props.part}</td>
      <td>{props.exercise}</td>
    </tr>
  )
}

const Content = ()=>{
  return(
    <>
      <Part part='Fundamentals of react' exercise={10}/>
      <Part part = 'Using props to pass data' exercise={7}/>
      <Part part = 'State of a component' exercise={14}/>
    </>
  )
}

const Total = ()=>{
  return(
    <tr>
      <td>Number of exercises</td>
      <td>{
      exercise.reduce((a,b)=> a+b,0)  
      }</td>
    </tr>
  
  )
}
const App = () => {
  return (
    <div>
      <Header name='Half Stack application development'/>
      <table>
        <Content/>
        <Total/>
      </table>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

