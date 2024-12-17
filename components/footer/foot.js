import { FaFacebook, FaInstagram, FaTwitter, FaYoutube , FaWhatsapp, FaPhone , FaPhoneAlt} from "react-icons/fa";

import "./foot.css";

export default function foot() {
    return (
        <div className="foot-main">
            <footer className="footer">
                <div className="footer-container">
                    {/* Contact Us Section */}
                    <div className="footer-section">
                        <h4>
                            <FaPhoneAlt width={20} height={20} /> Contact Us
                        </h4>
                        <ul>
                            <li>Phone: +91 9037435870</li>
                            <div className="title">Mail Us</div>
                            <a href="mailto:hudaahia@gmail.com">hudaahia@gmail.com</a>
                            <li>
                                Al Hidaya Islamic Academy,<br /> Kalamassery, Kerala, India.
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <ul className="social-icons">
                            <li>
                                <a href="https://www.facebook.com/people/Hidaya-Students-Union-for-Devoted-Activities/100064582216184/?__tn__=-UC*F" target="_blank" rel="noopener noreferrer" className="facebook">
                                    <FaFacebook className="facebook" width={20} height={20} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/huda_ahia_/#" target="_blank" rel="noopener noreferrer" className="instagram">
                                   <FaInstagram width={20} height={20} />
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp">
                                    <FaWhatsapp alt="WhatsApp Icon" className="pic-whatsapp" width={20} height={20} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Rights Section */}
                <div className="footer-rights">
                    <p>&copy; 2024 Edu Quick. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
