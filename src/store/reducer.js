const initalState={
    counter:0
}

const reducer =  (state =initalState,action)=>{
   
   if (action.type == 'INCREMENT') {
       return {

           ...state,
           counter:state.counter +1
       }
   } 

    else if (action.type =='DECREMENT') {

        return{
            ...state,
            counter:state.counter -1
        }
    }

    else if (action.type == 'Add' ) {
        return {
            ...state,
            counter:state.counter + action.value
        }
    }

    else if (action.type == 'Substract') {

        return {
            ...state,
            counter:state.counter  - action.value
        }
    }

    return state

}



export default reducer 