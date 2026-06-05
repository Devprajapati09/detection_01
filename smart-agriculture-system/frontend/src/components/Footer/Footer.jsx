import "./Footer.css";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h3>Smart Agriculture System</h3>

                    <p>
                        AI-powered farming solution for crop disease
                        detection, soil analysis, weather prediction,
                        government news, and farmer assistance.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>

                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>

                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>

                        <li>
                            <a href="/crop-detection">
                                Crop Detection
                            </a>
                        </li>

                        <li>
                            <a href="/weather-prediction">
                                Weather Prediction
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>

                    <p>Email: support@agriai.com</p>
                    <p>Phone: +91 9876543210</p>
                    <p>India</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © {year} Smart Agriculture System.
                    All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;