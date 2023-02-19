import React from "react";

class StartButton extends React.Component {
    render() {
        return (
            <button
                id="btn"
                className={this.props.decrypting && "hide"}
                onClick={this.props.run}
            >
                추첨!
            </button>
        );
    }
}

export default StartButton