import React,{Component} from "react";

class startScreen extends Component {
    constructor() {
        super();
        this.state = {
            card: "",
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/CA3/api/card')
            .then(data => data.json())
            .then(data => this.setState({ card: data }, () => console.log(data)));
    }

    render() {
        const data = this.state.card;
        return (
            <div className="main-content container" style={{margin:"30px",alignItems:"center",backgroundColor:"bisque"}}>
        {(data && data.card) &&
            <div>
            <img src={data.image} alt="image"></img>
            </div>
        }    
        </div>
        );
    }
}
export default startScreen;