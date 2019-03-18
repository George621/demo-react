import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import PrimaryLayout from './routers/PrimaryLayout.jsx'
import BasicExample from './routers/BasicExample.jsx';

function LogInButton(props){
	return <button onClick={props.onClick}>
		Login, https://malun666.github.io/aicoder_vip_doc/#/
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
        <BasicExample></BasicExample>
			<BrowserRouter>
				<PrimaryLayout />
			</BrowserRouter>
		</div>
	}  
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
)

