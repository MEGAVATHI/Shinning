import  React from'react'
function Employee({obj,salary,mylist}){
    return(
        <div>
        <p>Hi,{obj.name}! you got selected for {obj.role}</p>
        <p>your monthly package is {salary}</p>
        <p>Thanks</p>
        <p>{mylist[1]}</p>
        </div>
    )
}
export default function App(){
  return(
    <div>
    <Employee obj={{name:'Ram',role:'Web developer'}} salary={20000} mylist={['project Manager','Managing Director']}/>
    </div>
  )
}