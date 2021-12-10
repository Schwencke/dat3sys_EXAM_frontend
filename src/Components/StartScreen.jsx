import { useHistory } from "react-router-dom"
import Button from "./Button"
import { Modal, Container, } from "react-bootstrap";

export const StartScreen = ({ showRules, setShowRules }) => {

    let history = useHistory()

    const game = () => {
        history.push("/game")
    }

    return (
        <Container fluid>
            <div className="containerdiv">
                <h1>Over and Under</h1>
                <button className="me-2" onClick={() => setShowRules(true)}> Rules </button>
                <Button text={"Start"} onClick={game} />
            </div>
            <Modal show={showRules}>
                <Modal.Body>
                    GAME RULES:
                    When you start the game, you are presented with a card.
                    The first player has to guess if the next card will be OVER (higher) or UNDER (lower) than the presented card.
                    For each correct guess, a counter increment and keep a total score.
                    If you correctly guess 3 or more times,
                    you can PASS your turn to the next player who then continues your turn.
                    When a player makes an incorrect guess, the game is lost. The loser has to drink the amount equal to the total score and a new game can be started.
                </Modal.Body>

                <Modal.Footer>
                    <button
                        type="button"
                        class="btn btn-secondary"
                        onClick={() => setShowRules(false)}
                    >
                        Cancel
                    </button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}
