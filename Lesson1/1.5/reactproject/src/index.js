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
      <Part part= {props.part[0].name} exercise={props.part[0].exercises}/>
      <Part part = {props.part[1].name} exercise={props.part[1].exercises}/>
      <Part part = {props.part[2].name} exercise={props.part[2].exercises}/>
    </>
  )
}

const Total = (props)=>{
  return(
    <tr>
      <td>Number of exercises</td>
      <td>{
        props.part[0].exercises + props.part[1].exercises + props.part[2].exercises  
      }</td>
    </tr>
  
  )
}
const App = () => {
    const course = {
      name : 'Half Stack application development',
      parts : [{
      name: 'Fundamentals of react',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of component',
      exercises: 14
    }]}
    return(
    <div>
      <Header name = {course.name}/>
      <table>
        <Content part={course.parts} />
        <Total part={course.parts} />
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

