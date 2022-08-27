import React, { useEffect } from "react";
import './GameBoard.scss';

function GameBoard() {
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
    
        // clear raf if trying again
        window.cancelAnimationFrame(rafID);
        
        // set to desired value
        currValue = +this.value;
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
        alert('start game');
        
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
    <div className="GameBoard">
        <div className="PlayBoard">
        </div>
        <div className="StartContainer">
          <input type="range" className="pullee" />
        </div>
    </div>
  );
}

export default GameBoard;
