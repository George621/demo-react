import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting.jsx';

function LogInButton(props){
	return <button onClick={props.onClick}>
		Login
	</button>
}

function LogOutButton(props){
	return <button onClick={props.onClick}>
		LogOut
	</button>
}

class LoginControl extends Component{
	constructor(props){
		super(props)
		this.handlerLoginClick = this.handlerLoginClick.bind(this)
		this.handlerLogoutClick= this.handlerLogoutClick.bind(this)
		this.state={
			isLogedIn: false
		}
	}
	handlerLoginClick(){
	  this.setState({
		isLogedIn: true
	  })
	}
	handlerLogoutClick(){
		this.setState({
		  isLogedIn: false
		})
	  }

	render(){
		const isLogedIn = this.state.isLogedIn

		let button = null

		if(isLogedIn){
			button = <LogOutButton onClick={this.handlerLogoutClick} />
		}else{
			button = <LogInButton onClick={this.handlerLoginClick} />
		}
		return <div>
			<Greeting isLogedIn={isLogedIn} />	
			{button}
		</div>
	}  
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
)

