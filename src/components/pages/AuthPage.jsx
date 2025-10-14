import React, { useState } from 'react';
import '../css/Auth.css';
import Notification from '../Notification';
import { AllState } from '../../context/Context';
import constantData from '../../utils/constant.utils';
import { autoLoginRequest, loginRequest } from '../../services/auth.service';
import { useNavigate } from 'react-router';

const AuthPage = () => {
    const navigation = useNavigate();
    const { state, dispatch } = AllState();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleGoogleLogin = async () => {
        const apiRes = await loginRequest({
            authProviderId: "123",
            authProviderType: "google"
        })
        if (apiRes.statusCode === 500) {
            dispatch({ type: constantData.reducerActionType.notification, payload: { notification: { message: apiRes.message, type: apiRes.status } } });
        } else {
            autoLogin(apiRes.data.id, apiRes.data.password);
        }
    };

    const handleGitHubLogin = async () => {
        const apiRes = await loginRequest({
            authProviderId: "123",
            authProviderType: "github"
        })
        if (apiRes.statusCode === 500) {
            dispatch({ type: constantData.reducerActionType.notification, payload: { notification: { message: apiRes.message, type: apiRes.status } } });
        } else {
            autoLogin(apiRes.data.id, apiRes.data.password);
        }
    };

    const autoLogin = async (id, password) => {
        let apiRes = await autoLoginRequest({ id: id, password: password })
        if (apiRes.statusCode === 200) {
            localStorage.setItem('token', apiRes.data.token)
            dispatch({ type: constantData.reducerActionType.token, payload: { token: apiRes.data.token } });
            // -----------------------------------------------
            apiRes = { message: "login successfully", status: 'success' };
            navigation("/");
        }
        dispatch({ type: constantData.reducerActionType.notification, payload: { notification: { message: apiRes.message, type: apiRes.status } } });
    }

    return (

        <div className="auth-page">
            {/* Background Elements */}
            <div className="bg-gradient"></div>
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
            </div>

            <div className="auth-container">
                {/* Left Side - Branding */}
                <div className="brand-section">
                    <div className="brand-content">
                        <div className="logo2">
                            <div className="logo2-icon">
                                <i className="fas fa-code" style={{ color: "white" }}></i>
                            </div>
                            <span className="logo2-text">CloudIDE</span>
                        </div>

                        <h1 className="brand-title">
                            Welcome to <span className="gradient-text">CloudIDE</span>
                        </h1>

                        <p className="brand-subtitle">
                            The modern cloud development environment.
                            Code, collaborate, and deploy from anywhere.
                        </p>
                    </div>
                </div>

                {/* Right Side - Sign In Form */}
                <div className="form-section">
                    <div className="form-container">
                        <div className="form-header">
                            <h2>Sign In || Sing Up</h2>
                            <p>Welcome back! Please sign in or sign up to continue.</p>
                        </div>

                        {/* Social Auth Buttons */}
                        <div className="social-auth-grid">
                            <button className="social-auth-btn google-btn" onClick={handleGoogleLogin}>
                                <div className="social-icon">
                                    <svg width="18" height="18" viewBox="0 0 18 18">
                                        <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z" />
                                        <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z" />
                                        <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z" />
                                        <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z" />
                                    </svg>
                                </div>
                                <span>Continue with Google</span>
                            </button>

                            <button className="social-auth-btn github-btn" onClick={handleGitHubLogin}>
                                <div className="social-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <span>Continue with GitHub</span>
                            </button>
                        </div>

                        <div className="divider">
                            <span>or</span>
                        </div>

                        <div className="terms">
                            By continuing, you agree to our <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;