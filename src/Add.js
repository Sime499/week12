
import React,{useState} from 'react'
import {connect } from 'react-redux'
 import './Counter'


function Add(props){

    const [number ,setNumber]= useState(0)

    const handleAddClick =() =>{
        props.onAdd(number)

    }

    const handleSubstractClick=() =>{
        props.onSubstract(number)

    }


    const handleNumberChange=(e) =>{
        let value= parseInt(e.target.value)
        setNumber(value)

    }

    return (
        <div  className="AddContainer">

        <h3>AddSubstractCounter</h3>
        <input type="text" onChange={handleNumberChange}/>
        <button onClick={handleAddClick}>ADD</button>
        <button onClick={handleSubstractClick}>Substract</button>
        
        
        </div>
    )
}
 const mapDispatchToProps = (dispatch)=>{
     return{
         onAdd:(number)=> dispatch({type:'Add', value:number}),
         onSubstract:(number)=> dispatch({type:'Substract',value:number})
     }
 }

 

export default connect(null,mapDispatchToProps)(Add);