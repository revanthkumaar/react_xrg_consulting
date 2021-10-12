import React from 'react';
import Login from './pages/login-component/login.component'
import Booking from './pages/booking-component/booking.component'
import RestrauntList from './pages/restraunt-list-component/restraunt.list.component'
function App() {
  return (
    <div className="App">
     <Login/>
     <Booking/>
     <RestrauntList/>
    </div>
  );
}

export default App;
