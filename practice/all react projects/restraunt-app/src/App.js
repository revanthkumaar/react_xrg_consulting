import React from 'react';
import Login from './pages/login-component/login.component'
import Booking from './pages/booking-component/booking.component'
import RestrauntList from './pages/restraunt-list-component/restraunt.list.component'
import EventHandlerExample from './child-components/eventHandlerWithReact/eventHandlerExample.jsx'
import EventHandleExampleWithClass from './child-components/eventHandlerWithReact/eventHandleExampWithClassComp'
import BasicRoutingExample from './pages/BasicRoutingExample'
function App() {
  return (
    <div className="App">
      <Login />
      <Booking />
      <RestrauntList />
      <EventHandlerExample />
      <EventHandleExampleWithClass />
      <h1>Below is the basic routing example</h1>
      <BasicRoutingExample/>
    </div>
  );
}

export default App;
