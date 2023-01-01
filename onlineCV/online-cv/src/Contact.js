// investigated icons in react:
// https://github.com/react-icons/react-icons

import { FaSearchLocation } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

// structure and content for Contact section

export default function Contact() {
    return(
        <div className="container contact-container">
            <a href="https://www.google.com/maps/place/Southampton" target="_blank">
                <FaSearchLocation /> Southampton, Hampshire, England
            </a>
            <a href="mailto:harrisskittj@gmail.com" target="_blank">
                <FaEnvelope /> harrisskittj@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/jeffrey-morgan-harrisskitt-01253493/" target="_blank">
                <FaLinkedin /> LinkedIn profile
            </a>
            <a href="https://github.com/Mrmarley2" target="_blank">
                <FaGithub /> GitHub profile
            </a>
            <a href="https://reactjs.org/" target="_blank">
                Made with React.js
            </a>
        </div>
    )
}
