import { useHistory } from "react-router-dom"
import Button from "./Button"

export const StartScreen = () => {
    let history = useHistory()

    const rules = () => {
        history.push("/rules")
    }

    const game = () => {
        history.push("/game")
    }

    return (
        <div className="containerdiv">
            <h1>Over and Under</h1>
            <Button text={"Rules"} onClick={rules} /><br />
            <Button text={"Start"} onClick={game} />
        </div>
    )
}
