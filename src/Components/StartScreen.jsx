import React,{Component} from "react";

class startScreen extends Component {
    constructor() {
        super();
        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
        fetch('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
            .then(data => data.json())
            .then(data => this.setState({ cards: data }, () => console.log(data)));
    }

    render() {
        const data = this.state.cards;
        return (
            <div className="main-content container" style={{margin:"30px",alignItems:"center",backgroundColor:"bisque"}}>
        {(data && data.cards) &&
            <div>
            <img src={data.cards[0].image} alt="image"></img>
            </div>
        }    
        </div>
        );
    }
}
export default startScreen;