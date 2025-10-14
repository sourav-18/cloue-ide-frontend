import React, { useEffect } from 'react';
import './css/Notification.css';
import { AllState } from '../context/Context';
import constantData from '../utils/constant.utils';

const Notification = () => {
    const { state: { notification }, dispatch } = AllState();

    useEffect(()=>{
        if(notification){
            setTimeout(() => {
                handleClose();
            }, 3300);
        }
    },[notification])

    const getIcon = () => {
        switch (notification&&notification.type) {
            case 'success':
                return 'fas fa-check-circle';
            case 'error':
                return 'fas fa-exclamation-circle';
            case 'warning':
                return 'fas fa-exclamation-triangle';
            case 'info':
            default:
                return 'fas fa-info-circle';
        }
    };

    const handleClose = () => {
        dispatch({ type: constantData.reducerActionType.notification, payload: { notification: null } });
    }
    return (
        notification && <div className={`notification ${notification.type} show`}>
            <div className="notification-content">
                <div className="notification-icon">
                    <i className={getIcon()}></i>
                </div>
                <div className="notification-message">
                    {notification.message}
                </div>
                <button className="notification-close" onClick={handleClose}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <div className="notification-progress"></div>
        </div>
    );
};

export default Notification;