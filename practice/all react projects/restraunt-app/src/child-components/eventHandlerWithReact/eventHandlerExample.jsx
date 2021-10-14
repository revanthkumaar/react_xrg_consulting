//create a functional component here
//example for event handlers
import React from 'react';
function EventHandlerExample() {

    //functionality
    function buttonClickHandler(){
        console.log('buttonClicked in eventhandlerexample component')
    }

    //html to be rendered
    return (
        <div className="eventhandler-component">
            <button onClick={buttonClickHandler}>Sample Button</button>
        </div>
    )
}
export default EventHandlerExample;