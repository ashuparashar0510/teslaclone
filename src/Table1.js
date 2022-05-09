// import React from 'react'

// function Thead() {
//     return (
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>marks</th>
//             </tr>
//         </thead>
//     )
// }

// function Tbody(props) {
//     console.log(props)
//     let table = props.data.map((current, index) => {
//         return (
//             <tr>
//                 <td>{current.Name}</td>
//                 <td>{current.marks}</td>
//             </tr>
//         )
//     })
//     return (
//         <tbody>
//             {table}
//         </tbody>
//     )
// }

// export default class Table1 extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             <table>
//                 <>
//                     <Thead />
//                     <Tbody data={this.props.data} />
//                 </>
//             </table>
//         )
//     }
// } 