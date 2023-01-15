// importing bootstrap to use the carousel
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// researched bootstrap carousel again:
// https://react-bootstrap.github.io/components/carousel/
function Main(props) {

    // html links for later content use
    function Link(props) {
        return(<a 
                    href={props.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    {props.name}
                </a>)
    } 

    const startedLink = <a 
                            href="https://shiny.rstudio.com/tutorial/"
                            target="_blank"
                            rel="noreferrer"
                            className="hero-button blue-button"
                        >
                            Get Started
                        </a>
    const galleryLink = <a 
                            href="https://shiny.rstudio.com/gallery/"
                            target="_blank"
                            rel="noreferrer"
                            className="hero-button"
                        >
                            See Gallery
                        </a>

    return (
        <div className="r-container hero-container">
            <div className="blue-container">
                <img className="image image-one" src="./img/shinySiteBandOne.png"></img>
                <div className="hero-text hero-text-container-one">
                    <div className="tagline">
                        Interact. Analyze. Communicate.
                    </div>
                    <div className="tagline-blurb">
                        Take a fresh, interactive approach to telling your data story with Shiny. 
                        Let users interact with your data and your analysis. And do it all with R.
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="white-container">
                <div className="hero-text tagline-blurb">
                    Shiny is an R package that makes it easy to build interactive web apps straight from R. You 
                    can host standalone apps on a 
                    webpage or embed them in <Link name="R Markdown" link = "https://rmarkdown.rstudio.com/"/> documents 
                    or build <Link name="dashboards" link = "http://rstudio.github.io/shinydashboard/"/>. You can 
                    also extend your Shiny apps 
                    with <Link name="themes" link = "http://rstudio.github.io/shinythemes/"/>, <Link name="htmlwidgets" link = "http://www.htmlwidgets.org/"/>, 
                    and JavaScript <Link name="actions" link = "https://github.com/daattali/shinyjs/blob/master/README.md"/>.
                </div>
                <img className="image image-two" src="./img/shinySiteBandThree.png"></img>
            </div>
            <div className="white-container gallery-section">
                <Carousel interval={null}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./img/superzip-example.png"
                            alt="First carousel image"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./img/movie-explorer.png"
                            alt="Second carousel image"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./img/retirement-simulation.png"
                            alt="Third carousel image"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./img/datatables-options.png"
                            alt="Fourth carousel image"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="hero-text">
                    <div className="hero-text tagline-blurb">
                        Shiny combines the computational power of R with the interactivity of the 
                        modern web.
                    </div>
                    <div className="button-box">
                        {startedLink}
                        {galleryLink}
                    </div>
                </div>               
            </div>
        </div>
    )
}

export default Main;