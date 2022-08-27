import './BallContainer.css';

const getBallColor = function(number){
    const colors = ["yellow", "blue", "red", "gray", "green"]
    return colors[Math.floor((number-1)/10)];
}

function Ball(props){
    return (<div className={`LottoBall item ${getBallColor(props.number)}`}>{props.number}</div>);
}
export default Ball