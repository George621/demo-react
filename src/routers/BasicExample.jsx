
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = ()=>{
  return <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <hr/>
      <Route path='/' componnent = {Home} />
      <Route path='/about' componnent = {About} />
      <Route path='/topics' componnent = {Topics} />
    </div>
  </Router>
}

const Home = ()=>{
  return <h3>Home</h3>
}
const About = ()=>{
  return <h3>About</h3>
}
const Topics = ()=>{
  return <h3>Topics</h3>
}


export default BasicExample;