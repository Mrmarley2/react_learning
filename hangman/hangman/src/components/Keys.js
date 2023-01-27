// component to construct the 'keys' users press
export default function key(props) {
    return(
        <div className="letter-box">
            <span className="letter">{props.letter}</span>
        </div>
    )
}