import React from "react";

class EventHandleExampleWithClass extends React.Component {
  constructor(props) {
    super(props);
    //properties of the class
    this.state = {
      //initial state of the class component
      dusseraFromTomorrow: true,
      name: "revanth",
    };
  }

  //method binding
  buttonHandler() {
    console.log("button clicked in clas component");
  }

  render() {
    return (
      <div className="event-handler-with-class">
        <p>{this.state.name}</p>
        <button onClick={this.buttonHandler}>Sample Button</button>
      </div>
    );
  }
}

export default EventHandleExampleWithClass;
