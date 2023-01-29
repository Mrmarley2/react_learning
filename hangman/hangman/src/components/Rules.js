import help from '../images/question-mark.svg'

function Rules() {
    return(
        <div className="help-box">
            <a href="https://www.wikihow.com/Play-Hangman" target="_blank" rel="noreferrer">
                <img src={help} alt="help icon"></img>
            </a>
        </div>
        
    )
}

export default Rules