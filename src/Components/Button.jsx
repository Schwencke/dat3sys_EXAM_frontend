const Button = ({ text, onClick, disable}) => {

    const btnName = (text) => {
        console.log(text)
        switch(text){
        case "Over":
            return "btn btn-success"
        case "Under":
            return "btn btn-danger"
        case "PASS TURN":
            return "btn btn-success"
        case "Rules":
            return "btn btn-warning"
        default: return "btn btn-info"
        }
       
    }

    return (
       
        <button className={btnName(text)} disabled={disable} onClick={onClick}>{text}</button>
    )
}

export default Button