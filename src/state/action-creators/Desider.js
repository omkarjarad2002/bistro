export const takeamount = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"add",
            payload:amount
        })
    }
}
 