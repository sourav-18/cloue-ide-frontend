import React from 'react'
import './css/Feature.css';
function Feature() {
    return (
        <section className="features">
            <div className="container">
                <div className="section-header">
                    <h2>Powerful Features</h2>
                    <p>Everything you need to build, test, and deploy your applications in one place</p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-bolt"></i>
                        </div>
                        <h3>Fast & Responsive</h3>
                        <p>Experience lightning-fast performance with our optimized editor that works seamlessly across all devices.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3>Multi-Language Support</h3>
                        <p>Code in Node.js, Python, Java, C++, and more with full syntax highlighting and IntelliSense.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3>Real-time Collaboration</h3>
                        <p>Work together with your team in real-time. See edits as they happen and chat directly in the IDE.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-cloud-upload-alt"></i>
                        </div>
                        <h3>Instant Deployment</h3>
                        <p>Deploy your applications with a single click to our cloud infrastructure or connect to your own servers.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-terminal"></i>
                        </div>
                        <h3>Integrated Terminal</h3>
                        <p>Full terminal access right in your browser. Run commands, install packages, and manage your projects.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3>Secure & Private</h3>
                        <p>Your code is safe with us. Enterprise-grade security with encryption and regular backups.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature