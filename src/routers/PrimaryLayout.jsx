import React from 'react'
import {BrowserRouter,Route,Link,HashRouter as Router}from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';

const PrimaryLayout = () => (
    <Router>
      <div>
        <Link to="/" >HomePage</Link>
        <Link to="/users" >UsersPage</Link>
        <hr/>
        <Route path="/" exact  component={About} />
        <Route path="/users" exact component={Contact} />
        
      </div>
    </Router>
  )
  
  const HomePage =() => <div>Home Page</div>
  const UsersPage = () => <div>Users Page</div>

export default PrimaryLayout;
