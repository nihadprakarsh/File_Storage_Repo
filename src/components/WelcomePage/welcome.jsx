import { motion } from 'framer-motion';
import { CloudIcon } from 'lucide-react';
import "./welcome.css";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const WelcomePage = () => {
    const navigate = useNavigate();

    const onLoginClick = () => {
        navigate('/login');
    };

    const onSignupClick = () => {
        navigate('/signup');
    };
    return (
        <div>
            <nav className="navbar">
                <div className="navbar_logo">
                    <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2}}
                    >
                        <span>WBFR</span>
                    </motion.div>
                </div>
            </nav>

            <main>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="mb-8">
                        <CloudIcon />
                        <h1>
                            Web Based File Repository
                        </h1>
                    </div>
                    <br />
                    <p class="welcome">
                        Welcome to WBFR
                    </p>
                    <br />

                    <p class="cloud-storage-description">
                        Experience seamless file management with our cutting-edge cloud storage solution. Store, organize, and share your files with unparalleled ease and security</p>
                    <br /><br />
                    <div className="button-container">
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={onLoginClick}
                            style={{
                                backgroundColor:'#6200ea',
                                marginRight: '10px',
                                padding: '10px 24px',
                                fontSize: '16px'
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={onSignupClick}
                            style={{
                                marginRight: '10px',
                                padding: '10px 24px',
                                fontSize: '16px'
                            }}
                        >
                            Signup
                        </Button>
                    </div>
                </motion.div>
            </main>
            <br /><br /><br /><br /><br /><br />
            <footer>
                <div>
                    <p>
                        © {new Date().getFullYear()} Web Based File Repository. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default WelcomePage;