import { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducer";
const allState=createContext();

function Context({children}){
    const [state,dispatch]=useReducer(Reducer,{
        selectedFile:null,
        selectedDir:null,
        socket:null,
        initialDirPath:null,
        fileCreateDirPath:null,
    })
    return(
        <allState.Provider value={{state,dispatch}}>
            {children}
        </allState.Provider>
    )
}
export default Context;
export const AllState=()=>{
    return useContext(allState)
}