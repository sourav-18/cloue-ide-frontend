import React from 'react'
import "./css/LanguageSection.css"
function LanguageSection() {
  return (
    <section className="languages">
        <div className="container">
            <div className="section-header">
                <h2>Supported Languages</h2>
                <p>Code in your favorite programming languages with full support</p>
            </div>
            
            <div className="languages-grid">
                <div className="language-card">
                    <div className="language-icon">
                        <i className="fab fa-js-square"></i>
                    </div>
                    <h3>JavaScript</h3>
                </div>
                
                <div className="language-card">
                    <div className="language-icon">
                        <i className="fab fa-python"></i>
                    </div>
                    <h3>Python</h3>
                </div>
                
                <div className="language-card">
                    <div className="language-icon">
                        <i className="fab fa-java"></i>
                    </div>
                    <h3>Java</h3>
                </div>
                
                <div className="language-card">
                    <div className="language-icon">
                        <i className="fas fa-code"></i>
                    </div>
                    <h3>C++</h3>
                </div>
                
                <div className="language-card">
                    <div className="language-icon">
                        <i className="fab fa-rust"></i>
                    </div>
                    <h3>Rust</h3>
                </div>
                
                <div className="language-card">
                    <div className="language-icon">
                        <i className="fas fa-cube"></i>
                    </div>
                    <h3>Ruby</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LanguageSection