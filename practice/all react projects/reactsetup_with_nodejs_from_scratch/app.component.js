import React, {Component} from 'react';
//import react featurs from the react library

class App extends Component {
    //inherit the component class and create your own react class component 
    render() { //takes care of rendering the content written inside this 
        //on the html page
        return(
            <div className="App-component">
                <p>This is my first react component, bless me!</p>
            </div>
        )
    }

}
export default App;