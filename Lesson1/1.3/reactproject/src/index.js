import React from 'react';
import ReactDOM from 'react-dom';



const Header = (props) => {
  return(
    <h1>{props.name}</h1>
  )
}

const Part = (props)=>{
  
  return(
    <tr>
      <td>{props.part}</td>
      <td>{props.exercise}</td>
    </tr>
  )
}

const Content = (props)=>{
  return(
    <>
      <Part part= {props.part1.name} exercise={props.part1.exercises}/>
      <Part part = {props.part2.name} exercise={props.part2.exercises}/>
      <Part part = {props.part3.name} exercise={props.part3.exercises}/>
    </>
  )
}

const Total = (props)=>{
  return(
    <tr>
      <td>Number of exercises</td>
      <td>{
        props.part1.exercises + props.part2.exercises + props.part3.exercises  
      }</td>
    </tr>
  
  )
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of react',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of component',
      exercises: 14
    }
    return(
    <div>
      <Header name = {course}/>
      <table>
        <Content part1={part1} part2={part2} part3={part3}/>
        <Total part1={part1} part2={part2} part3={part3}/>
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

