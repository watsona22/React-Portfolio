import { useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className="style">
            <footer className="w-100 mt-auto text-dark p-4">
                <section className="my-icon">
                    <a href="https://www.linkedin.com/in/amber-denise-watson/">
                        <FaLinkedin />
                    </a>
                </section>
                <section className="my-icon">
                    <a href="https://github.com/watsona22">
                        <FaGithub />
                    </a>
                </section>
                <div className="container text-center mb-5">
                    {location.pathname !== '/' && (
                        <button
                            className="btn btn-dark mb-3"
                            onClick={() => navigate(-1)}
                        >
                            &larr; Go Back
                        </button>
                    )}
                    <h4>&copy; {new Date().getFullYear()} - Amber Watson</h4>
                </div>
            </footer>
        </div >
    );
};

export default Footer;
