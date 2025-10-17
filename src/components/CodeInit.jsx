import React, { useEffect } from 'react'
import { AllState } from '../context/Context';
import { socketInit } from '../general/socket.general';
import CodeSpace from './CodeSpace';
import constantData from '../utils/constant.utils';
import { useLocation, useParams } from 'react-router';
import { projectSocketUrlRequest } from '../services/project.service';

function CodeInit() {
    const { search } = useLocation()
    const query = new URLSearchParams(search);
    const replId = query.get('repelId');
    const { dispatch } = AllState();
    useEffect(() => {
        if (replId) {
            handleSocketInit()
        }
    }, []);

    async function handleSocketInit() {
        const socketUrlRes = await projectSocketUrlRequest(replId);
        if (socketUrlRes.statusCode === 200) {
            let socket = socketInit();
            dispatch({ type: constantData.reducerActionType.socketSet, payload: { socket: socket } });
        }

    }
    return (
        <CodeSpace />
    )
}

export default CodeInit