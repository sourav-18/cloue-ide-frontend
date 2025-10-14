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
        case constantData.reducerActionType.isInitialFileLoadComplete:
            return{...state,isInitialFileLoadComplete:action.payload.isInitialFileLoadComplete}
        case constantData.reducerActionType.notification:
            return{...state,notification:action.payload.notification}
        case constantData.reducerActionType.userProfile:
            return{...state,userProfile:action.payload.userProfile}
        case constantData.reducerActionType.token:
            return{...state,token:action.payload.token}
        default:
            return state;
    }
}