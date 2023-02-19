
import React, { useEffect } from "react";
import './PlayButton.css';


function PlayButton(props){

    useEffect(()=> {
        const inputRange = document.getElementsByClassName('pullee')[0];
        const maxValue = 150; // the higher the smoother when dragging
        const speed = 12; // thanks to @pixelass for this
        let currValue;
        let rafID;
        let initialX;
    
    // // set min/max value
    inputRange.min = 0;
    inputRange.max = maxValue;
    inputRange.value = 0;
    
    // // listen for unlock
    function unlockStartHandler() {
        
        // clear raf if trying again
        window.cancelAnimationFrame(rafID);
        
        // set to desired value
        currValue = +this.value;
    }

    // // listen for unlock
    function unlockTouchStartHandler(e) {
        initialX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
    }
    
    function unlockMoveHandler(e){
        if (initialX !== null) {
            const currentX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
            let diffX = initialX - currentX;

            currValue =- diffX;
            inputRange.value = currValue;
        }

    }
    
    function unlockEndHandler() {
        
        // store current value
        currValue = +this.value;
        
        // determine if we have reached success or not
        if(currValue >= maxValue) {
            successHandler();
        }
        else {
            rafID = window.requestAnimationFrame(animateHandler);
        }
    }
    
    // // handle range animation
    function animateHandler() {
        
        // update input range
        inputRange.value = currValue;
        
        // determine if we need to continue
        if(currValue > -1) {
            window.requestAnimationFrame(animateHandler);   
        }
        
        // decrement value
        currValue = currValue - speed;
    }
    
    // handle successful unlock
    function successHandler() {
        props.run();
        // reset input range
        inputRange.value = 0;
    };


        // // bind events
        inputRange.addEventListener('mousedown', unlockStartHandler, false);
        inputRange.addEventListener('mouseup', unlockEndHandler, false);
        inputRange.addEventListener('touchend', unlockEndHandler, false);
        inputRange.addEventListener('touchstart', unlockTouchStartHandler, false);
        inputRange.addEventListener('touchmove', unlockMoveHandler, false);
      }, [])


  return (
    <div className="StartContainer">
        <h1 id="btn" className={` ${!props.decrypting &&  "hide"} `}>당첨번호 추첨 중에요</h1>
        <input id="btn"   type="range" className={`pullee ${props.decrypting &&  "hide"} `} />
    </div>
  );
}

export default PlayButton