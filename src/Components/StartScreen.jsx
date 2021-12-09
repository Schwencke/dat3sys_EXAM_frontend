import { useHistory } from "react-router-dom"
import Button from "./Button"

export const StartScreen = ({show,setShow}) => {
    
let history = useHistory()

const rules = () => {
    history.push("/Rules")
}

    const game = () => {
        history.push("/game")
    }

    return (
        <div className="containerdiv">
            <h1>Over and Under</h1>
            <button variant="primary" onClick={ rules}>
        Rules
        </button> <br/>
            <Button text={"Start"} onClick={game} />
        </div>
    )
}
