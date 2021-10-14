import React from 'react';
import Login from './pages/login-component/login.component'
import Booking from './pages/booking-component/booking.component'
import RestrauntList from './pages/restraunt-list-component/restraunt.list.component'
import EventHandlerExample from './child-components/eventHandlerWithReact/eventHandlerExample.jsx'
function App() {
  return (
    <div className="App">
     <Login/>
     <Booking/>
     <RestrauntList/>
     <EventHandlerExample/>
    </div>
  );
}

export default App;
