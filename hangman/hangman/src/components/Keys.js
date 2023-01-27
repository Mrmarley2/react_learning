
// component to construct the letters for hangman
export default function key(props) {
    return(
        <div className="letter-box">
            <span className="letter">{props.letter}</span>
        </div>
    )
}