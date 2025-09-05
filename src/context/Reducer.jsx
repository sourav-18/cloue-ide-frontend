import constantData from "../utils/constant.utils";
export default function Reducer(state,action){
    switch(action.type){
        case constantData.reducerActionType.selectedFile:
            return{...state,selectedFile:action.payload.selectedFile}
        case constantData.reducerActionType.socketSet:
            return{...state,socket:action.payload.socket}
        case constantData.reducerActionType.initialDirPath:
            return{...state,initialDirPath:action.payload.initialDirPath}
        default:
            return state;
    }
}