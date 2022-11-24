// function Employee(id,name){
//     console.log("HI "+name+" YOUR EMPLOYEE ID IS "+id)
// }
// Employee("007","RAM")
import  React from'react'
function Employee(props){
    return(
        <div>
        <p>Hi{props.name},this is your employee id{props.id}</p>
        </div>
    )
}
export default Employee