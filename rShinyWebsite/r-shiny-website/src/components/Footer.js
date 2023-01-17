// code for the footer section of the web page

// importing font awesome to use social media icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// adds github logo as element
const githubLogo = <FontAwesomeIcon icon={faGithub} />

// adds facebook logo as element
const facebookLogo = <FontAwesomeIcon icon={faFacebook} />

// adds linkedin logo as element
const linkedinLogo = <FontAwesomeIcon icon={faLinkedin} />

// adds twitter logo as element
const twitterLogo = <FontAwesomeIcon icon={faTwitter} />

function Footer(){

    const deployLink = <a href="https://shiny.rstudio.com/deploy/"
    target="_blank"
    rel="noreferrer"
    className="deploy-button"
    >
        Learn More
    </a>

    const positLink = <a href="https://posit.co/"
    target="_blank"
    rel="noreferrer"
    >
        <img className="posit-logo" src="./img/posit-logo-white-tm.svg" alt=""></img>
    </a>

    return(
       <footer className="r-container r-footer">
            <div className="footer-titles">
                <h1>Hosting and Deployment</h1>
                <h3>
                    Put your Shiny app on the web by using your own servers 
                    or Posit's hosting service.
                </h3>
            </div>
            {deployLink}
            <div className="footer-box">
                <div className="logo-box">
                    <p>Proudly supported by</p>
                    {positLink}
                </div>
                <div className="footer-icons">
                    <a className="large-logo twitter-logo" href="https://github.com/rstudio/shiny" target="_blank" rel="noreferrer">
                        {twitterLogo}
                    </a>
                    <a className="large-logo github-logo" href="https://github.com/rstudio/shiny" target="_blank" rel="noreferrer">
                        {githubLogo}
                    </a>
                    <a className="large-logo linkedin-logo" href="https://github.com/rstudio/shiny" target="_blank" rel="noreferrer">
                        {linkedinLogo}
                    </a>
                    <a className="large-logo facebook-logo" href="https://github.com/rstudio/shiny" target="_blank" rel="noreferrer">
                        {facebookLogo}
                    </a>                
                </div>
            </div>
       </footer> 
    )
}

export default Footer;