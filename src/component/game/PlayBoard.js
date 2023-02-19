import React from "react";
import GameBall from "./GameBall";
import PlayButton from "./PlayButton";

const numbers = [...Array(20).keys()];

class PlayBoard extends React.Component{

    constructor(props) {
        super(props);
        this.state.effect = false
    }


    state = { number: [0, 0, 0, 0, 0, 0] };
    randomize = () => {
        if (!this.state.effect) {
            const numberCopy = numbers.map((x) => x);
            numberCopy.sort(() => Math.random() - 0.5);
            
            const arr = [];
            for (let i = 0; i < 6; i++) {
                const random = Math.ceil(
                    Math.random() * (numberCopy.length - 1)
                );
                arr.push(numberCopy[random] + 1);
                numberCopy.splice(random, 1);
            }

            this.setState({ number: arr, effect: true });
            setTimeout(() => {
                this.setState({ effect: false });
            }, 8000);
        }

    };



    render() {
        return (
            <React.Fragment>
                <h1 id="title">BIRTHDAY<br/>LOTTERY</h1>
                <div id="numbers">
                    <GameBall
                        index="0"
                        color="grey"
                        number={this.state.number[0]}
                        decrypting={this.state.effect}
                    />
                    <GameBall
                        index="1"
                        color="grey"
                        number={this.state.number[1]}
                        decrypting={this.state.effect}
                    />
                    <GameBall
                        index="2"
                        color="grey"
                        number={this.state.number[2]}
                        decrypting={this.state.effect}
                    />
                    <GameBall
                        index="3"
                        color="grey"
                        number={this.state.number[3]}
                        decrypting={this.state.effect}
                    />
                    <GameBall
                        index="4"
                        color="grey"
                        number={this.state.number[4]}
                        decrypting={this.state.effect}
                    />
                    <GameBall
                        index="5"
                        color="grey"
                        number={this.state.number[5]}
                        decrypting={this.state.effect}
                    />
                </div>
                <div>
                    <PlayButton
                        decrypting={this.state.effect}
                        run={this.randomize}    
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default PlayBoard