import React, { useEffect } from 'react'
import { AllState } from '../context/Context';
import { socketInit } from '../general/socket.general';
import CodeSpace from './CodeSpace';
import constantData from '../utils/constant.utils';

function CodeInit() {
    const { dispatch } = AllState();
    useEffect(() => {
        let socket = socketInit();
        dispatch({ type: constantData.reducerActionType.socketSet, payload: { socket: socket } });
    }, []);
    return (
       <CodeSpace/>
    )
}

export default CodeInit