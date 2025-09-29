import constantData from "../utils/constant.utils";
export default function Reducer(state,action){
    switch(action.type){
        case constantData.reducerActionType.selectedFile:
            return{...state,selectedFile:action.payload.selectedFile}
        case constantData.reducerActionType.socketSet:
            return{...state,socket:action.payload.socket}
        case constantData.reducerActionType.selectedDir:
            return{...state,selectedDir:action.payload.selectedDir}
        case constantData.reducerActionType.fileCreateDirPath:
            return{...state,fileCreateDirPath:action.payload.fileCreateDirPath}
        case constantData.reducerActionType.folderCreateDirPath:
            return{...state,folderCreateDirPath:action.payload.folderCreateDirPath}
        default:
            return state;
    }
}