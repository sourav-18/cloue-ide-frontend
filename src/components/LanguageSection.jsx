import React from 'react'
import "./css/LanguageSection.css"
function LanguageSection() {
  return (
    <section class="languages">
        <div class="container">
            <div class="section-header">
                <h2>Supported Languages</h2>
                <p>Code in your favorite programming languages with full support</p>
            </div>
            
            <div class="languages-grid">
                <div class="language-card">
                    <div class="language-icon">
                        <i class="fab fa-js-square"></i>
                    </div>
                    <h3>JavaScript</h3>
                </div>
                
                <div class="language-card">
                    <div class="language-icon">
                        <i class="fab fa-python"></i>
                    </div>
                    <h3>Python</h3>
                </div>
                
                <div class="language-card">
                    <div class="language-icon">
                        <i class="fab fa-java"></i>
                    </div>
                    <h3>Java</h3>
                </div>
                
                <div class="language-card">
                    <div class="language-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>C++</h3>
                </div>
                
                <div class="language-card">
                    <div class="language-icon">
                        <i class="fab fa-rust"></i>
                    </div>
                    <h3>Rust</h3>
                </div>
                
                <div class="language-card">
                    <div class="language-icon">
                        <i class="fas fa-cube"></i>
                    </div>
                    <h3>Ruby</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LanguageSection