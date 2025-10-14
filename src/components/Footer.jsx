import React from 'react'
import "./css/Footer.css"
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>CloudIDE</h3>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Status</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Product</h3>
                        <ul className="footer-links">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Releases</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Community</h3>
                        <ul className="footer-links">
                            <li><a href="#">Forums</a></li>
                            <li><a href="#">Discord</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Legal</h3>
                        <ul className="footer-links">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Compliance</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2023 CloudIDE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer