import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function Rules({ show, setShow }) {

    const reload = () => window.location.reload();

    return (
        <>
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "100vh" }}
            >
            </div>
            <Modal show={show} onHide={() => setShow(false)} onExit={reload}  >
                <Modal.Header closeButton>
                    <Modal.Title>RULES</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    GAME RULES:
                    When you start the game, you are presented with a card.
                    The first player has to guess if the next card will be OVER (higher) or UNDER (lower) than the presented card.
                    For each correct guess, a counter increment and keep a total score.
                    If you correctly guess 3 or more times, you can PASS your turn to the next player who then continues your turn. When a player makes an incorrect guess, the game is lost. The loser has to drink the amount equal to the total score and a new game can be started.
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={() => setShow(false)}> Close </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Rules