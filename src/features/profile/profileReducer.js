export const profileReducer = (data={}, action)=>{
    if(action.type==="setProfile"){
        return action.payload;
    }else{
        return data;
    }
}