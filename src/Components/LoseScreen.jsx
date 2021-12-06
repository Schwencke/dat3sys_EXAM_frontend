import { useHistory } from "react-router-dom"
import Button from "./Button"

export const LoseScreen = () => {
    let history = useHistory()

    const restart = () => {
        history.push("/game")
    }

    return (
        <div>
            <h1>Score X</h1>
            <Button text={"Restart"} onClick={restart} /><br />
        </div>
    )
}
