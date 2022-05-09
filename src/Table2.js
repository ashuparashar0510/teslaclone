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

// function Tbody(obj) {
//     console.log(obj)
//     let table = obj.data.map((current, index) => {
//         return (
//             <tr key={index}>
//                 <td>{current.Name}</td>
//                 <td>{current.marks}</td>
//                 <td><button>delete</button></td>
//             </tr>
//         )
//     })
//     return (
//         <tbody>
//             {table}
//         </tbody>
//     )
// }

// export default class Table2 extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             tableData: [
//                 { Name: 'csd', marks: 100 },
//                 { Name: 'csd1', marks: 200 },
//                 { Name: 'csd3', marks: 300 },
//                 { Name: 'csd', marks: 100 },
//                 { Name: 'csd1', marks: 200 },
//                 { Name: 'csd3', marks: 300 }
 
//             ]
//         }
//     }

//     DeleteRow(indexDel){
//         this.setState({
//             tableData:this.state.tableData.filter((current,index)=>{
//                 return index!=indexDel
//             })
//         })
//     }

//     render() {
//         // console.log(this.props)
//         return (
//             <table>
//                 <>
//                     <Thead />
//                     <Tbody data={this.state.tableData} />
//                 </>
//             </table>
//         )
//     }
// } 