import Ball from './Ball';
import './BallContainer.css';

function BallContainer(props){
    return (
    <div className='BallBoard'>
        <div>
        {props.luckyNumber.round} 회차 ({props.luckyNumber.createdAt})
        </div>
        
        <div className="BallContainer">
            <Ball number={props.luckyNumber.number2}/>
            <Ball number={props.luckyNumber.number3}/>
            <Ball number={props.luckyNumber.number1}/>
            <Ball number={props.luckyNumber.number4}/>
            <Ball number={props.luckyNumber.number5}/>
            <Ball number={props.luckyNumber.number6}/>
            <strong className='item'>+</strong>
            <Ball number={props.luckyNumber.bonus}/>
        </div>
    </div>);
}
export default BallContainer;