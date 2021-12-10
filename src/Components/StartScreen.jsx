import { useHistory } from "react-router-dom";
import Button from "./Button";
import { Container } from "react-bootstrap";
import Rules from "./Rules";

export const StartScreen = ({ showRules, setShowRules }) => {
  let history = useHistory();

  const game = () => {
    history.push("/game");
  };

  return (
    <Container fluid>
      <div className="containerdiv">
        <h1>Over and Under</h1>
        <img src="/drunk.gif" alt="logo" className="logo" /> <br />
        <Button onClick={() => setShowRules(true)} text="Rules" />
        <Button text={"Start"} onClick={game} />
      </div>
      <Rules showRules={showRules} setShowRules={setShowRules} />
    </Container>
  );
};
