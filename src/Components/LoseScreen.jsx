import { useHistory } from "react-router-dom"
import Button from "./Button"

export const LoseScreen = ({ score }) => {
    let history = useHistory()

    const restart = () => {
        history.push("/game")
    }

    return (
        <div>
            <img src="/drunk.gif" alt="" />
            <h1>You won! Now drink {score} sips...</h1>
            <Button text={"Restart"} onClick={restart} /><br />
        </div>
    )
}
