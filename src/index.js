 // // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

import React from 'react'
import  ReactDOM  from 'react-dom'
// ReactDOM.render(<h1>Ashutosh</h1>,document.querySelector("#root"))

// function Hello(){
//   return <h1>csd</h1>
// }
// ReactDOM.createRoot(document.querySelector("#root")).render(<Hello/>)

// class Hello extends React.Component{
//   render(){
//     return <h1>Saloni</h1>
//   }
// }

// ReactDOM.createRoot(document.querySelector("#root")).render(<Hello/>)

// import Demo from './Demo'
// ReactDOM.createRoot(document.querySelector("#root")).render(<Demo/>)

//state management

// import State from './State'
// ReactDOM.createRoot(document.querySelector("#root")).render(<State/>)

// import Counter from './Counter'
// import './index.css'
// ReactDOM.createRoot(document.querySelector("#root")).render(<Counter/>)

// import Timer from './Timer.js'
// ReactDOM.createRoot(document.querySelector("#root")).render(<Timer/>)

// import Table from './Table'
// ReactDOM.createRoot(document.querySelector("#root")).render(<Table/>)

//functional component as a argument
// function Display(props){
//     return(
//         <>
//         <h1>{props.Name}</h1>
//         <h2>{props.marks}</h2>
//         </>
//     )
// }

// ReactDOM.createRoot(document.querySelector("#root")).render(<Display Name='Ashutosh' marks='100'/>)

//class component as an argument
// import Props from './Props'
// ReactDOM.createRoot(document.querySelector("#root")).render(<Props Name='Ashutosh' marks='100'/>)

//json format (javascript object notation)
// import Table1 from './Table1'

// let tableData=[
//     {Name:'csd', marks:100},
//     {Name:'csd1', marks:200},
//     {Name:'csd3', marks:300},
//     {Name:'csd', marks:100},
//     {Name:'csd1', marks:200},
//     {Name:'csd3', marks:300}
// ]


// ReactDOM.createRoot(document.querySelector("#root")).render(<Table1 data={tableData}/>)

// import Table2 from './Table2'
// ReactDOM.createRoot(document.querySelector("#root")).render(<Table2 />)

//Tesla clone

import Home from './Home'
ReactDOM.createRoot(document.querySelector("#root")).render(<Home/>)
