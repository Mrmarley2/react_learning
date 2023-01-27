
// component to load the hanged man images the 'keys' users press
export default function key(props) {
    return(
        <div className="image-box">
            <img src={props.image} className="hanged-man" alt="hangman progress indicator"></img>
        </div>
    )
}