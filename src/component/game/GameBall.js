import React from "react";
import './GameBall.css';

class GameBall extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number: "?",
            decryptingDone: "",
            ballColor: "gray"
        };
    }

    randomNumber() {
        let randomNumber = Math.floor(Math.random() * 19) + 1 ;

        let randomColor = this.colorConvert(randomNumber);
        this.setState({ number: randomNumber, ballColor : randomColor});
    }

    colorConvert(inputNumber){
        let randomColor ;
        switch (inputNumber % 5 ) {
            case 0 : 
            randomColor = "blue"
                break;

            case 1 : 
            randomColor = "red"
                break;

            case 2 : 
            randomColor = "green"
            break;

            case 3 : 
            randomColor = "yello"
                break;

            case 4 : 
            randomColor = "purple"
            break;

            default : 
            randomColor = "gray"
        }

        return randomColor;
    }

    componentDidUpdate(nextProps) {
        const { decrypting } = this.props;
        if (nextProps.decrypting !== decrypting) {
            if (decrypting) {
                this.decryptEffect();
            }
        }
    }

    decryptEffect() {
        this.setState({ decryptingDone: "" });
        this.timer = setInterval(() => {
            this.randomNumber();
        }, 10);
        setTimeout(() => {
            this.setState({
                decryptingDone: "done",
                number: this.props.number,
                ballColor: this.colorConvert(this.props.number)
            });
            clearTimeout(this.timer);
        }, 1000 * +this.props.index + 1000);
    }

    render() {
        return (
            <div
                className={`ball ${this.state.ballColor} ${this.state.decryptingDone} `}
            >
                {this.state.number}
            </div>
        );
    }
}

export default GameBall