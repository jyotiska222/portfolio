import React from 'react';
import './Footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.instagram.com/jyotiskabiswas/" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="/" className="social-icon">
                    <i className="fab fa-telegram fa-2x"></i>
                </a>
                <a href="https://x.com/j_biswas0022" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-x-twitter fa-2x"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61550943131252" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
            </div>
            <div className="footer-links">
                <a href="/" className="footer-link">Home</a>
                <a href="/" className="footer-link">Services</a>
                <a href="/" className="footer-link">About</a>
                <a href="/" className="footer-link">Terms</a>
                <a href="/" className="footer-link">Privacy Policy</a>
            </div>
            <div className="footer-copy">
                Jyotiska Biswas © 2024
            </div>
        </footer>
    );
}

export default Footer;
