

import React from 'react';
import {connect } from 'react-redux';
import './Counter.css'



function Counter(props){

    const handleIncrementClick =() =>{
        props.onIncrement()

    }

    const handleDecrementClick=()=>{
        props.onDecrement()
    }

    return (
        <div className="countContainer">
        <h2>IncrementDecrementCounter </h2>
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick ={handleDecrementClick}>Decrement</button>
        
        </div>

    );
}

const mapStateToProps = (state) => {
    return {

        Ctr: state.counter
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onIncrement:()=> dispatch({type:'INCREMENT'}),
        onDecrement:()=> dispatch({type:'DECREMENT'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)