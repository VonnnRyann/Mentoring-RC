const initialState={
    counter: 0, 
    users:[]
  }
  
  const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
      case "increment my counter":
        return {...state,counter:state.counter+action.payload}
      case "decrement my counter":
        return {...state,counter:state.counter-action.payload}
      case "reset my counter":
        return {...state,counter:action.payload}
      case "add new user":
        return {...state, users:[...state.users, action.payload]}
      default :
        return state
    }
  
  }

  export {initialState,reducer}