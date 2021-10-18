import React from "react";
import {Link, Route, Switch} from 'react-router-dom'

export default function BasicRoutingExample() {
  return (
    <div>
      <a href="#">Visit W3Schools.com!</a>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route  path="/">
          <Home />
        </Route>

        <Route path="/users">
          <Users />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return (<><h2>Home</h2>
  <p>this is the home page content and component</p></>);
}

function About() {
  return (<><h2>About page</h2>
  <p>this is the about page content and component</p></>);
}

function Users() {
  return (<><h2>Users</h2>
  <p>this is the users page content and component</p></>);
}
