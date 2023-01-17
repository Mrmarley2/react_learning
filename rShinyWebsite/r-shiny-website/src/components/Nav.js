// importing font awesome to use github icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// adds github logo as element
const elementLogo = <FontAwesomeIcon icon={faGithub} />

function Nav() {
    return(
        <div className="r-container nav-container">
            <nav className="nav-bar">
                <img className="shiny-logo" src="./img/shiny-solo.svg" alt=""></img>
                <ul className="nav-list">
                    <li>
                        <a href="https://shiny.rstudio.com/tutorial/" target="_blank" rel="noreferrer">Get Started</a>
                    </li>
                    <li>
                        <a href="https://shiny.rstudio.com/gallery/" target="_blank" rel="noreferrer">Gallery</a>
                    </li>
                    <li>
                        <a href="https://shiny.rstudio.com/articles/" target="_blank" rel="noreferrer">Articles</a>
                    </li>
                    <li>
                        <a href="https://shiny.rstudio.com/app-stories/" target="_blank" rel="noreferrer">App Stories</a>
                    </li>
                    <li>
                        <a href="https://shiny.rstudio.com/reference/shiny/" target="_blank" rel="noreferrer">Reference</a>
                    </li>
                    <li>
                        <a href="https://shiny.rstudio.com/deploy/" target="_blank" rel="noreferrer">Deploy</a>
                    </li>
                    <li>
                        <a href="https://shiny.rstudio.com/help/" target="_blank" rel="noreferrer">Help</a>
                    </li>
                    <li>
                        <a href="https://shiny.rstudio.com/blog/" target="_blank" rel="noreferrer">Blog</a>
                    </li>
                    <li>
                        <a href="https://shiny.rstudio.com/contribute/" target="_blank" rel="noreferrer">Contribute</a>
                    </li>
                    <li>
                        <a className="logo github-logo" href="https://github.com/rstudio/shiny" target="_blank" rel="noreferrer">
                            {elementLogo}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
    
}

export default Nav;