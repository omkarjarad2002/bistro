const reducer = (state=0, action)=>{
    if(action.type==="add" && state != -1){
        return state + action.payload
    }else{
        return state;
    }
}

export default reducer;