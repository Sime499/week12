

import React from 'react';
import {connect} from 'react-redux';
 import './Counter.css'



function Display (props) {

    return ( 

        <div className="Display">
            <h4>DisplayCounter</h4>
            <h5>{props.Ctr}</h5>
        
        </div>
    );


}

const mapStateToProps= (state)=>{
    return {
        Ctr: state.counter

    }

}





export default connect (mapStateToProps)(Display)