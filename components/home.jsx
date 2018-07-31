import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory} from "react-router";
import ReactBootstrap from 'react-bootstrap'
import  { Radio,ListGroupItem,ListGroup,Carousel ,FormGroup ,ControlLabel ,FormControl ,Label,Accordion, Panel, Modal ,Button, ButtonGroup, OverlayTrigger , Popover,Tabs , Tab, DropdownButton, MenuItem, ProgressBar } from 'react-bootstrap';
import ScrollArea from 'react-scrollbar';
import tryParseJSON from 'try-parse-json';
import Imgspoc from './imgspoc.jsx';

function ShowSuccessAtDOM(email) {
	ReactDOM.render(
    <Imgspoc/>,
    document.getElementById('root')
	)	
};



const Home = React.createClass({

 getInitialState() {
    return {};
      key: 1
  },

  

componentDidMount: function() {

initiateTextFields();
setTimeout(function(){ document.getElementsByTagName("BODY")[0].className="active";  }, 500);


 },
 componentDidUpdate: function(prevProps, prevState){

   initiateTextFields();
},

loginError_pop(){
  this.setState({accept:false});
},
 
Login(email, password) {

	var url = "http://localhost:60623/AssetServices.svc/LdapAuthentication/" ;
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.onreadystatechange = () => {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
      {
		 alert(xmlhttp.responseText);
	     var JSONData = tryParseJSON(xmlhttp.responseText);
		 if (!JSONData || JSONData["LdapAuthenticationResult"] == true) {
				this.setState({LoginStatus : JSONData["LdapAuthenticationResult"]});
				console.log(this.state.LoginStatus);
				return JSONData["LdapAuthenticationResult"];
			}
		else{
		       return false;
			}
		}
	}
    xmlhttp.send(JSON.stringify({EmployeeId: email, Password: password }));
},



  render() {

    let close = () => this.setState({ show: false});
	if(this.state.LoginStatus != true)
		return (
		<div className="container">
		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad containerBack">
   			 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad">
			 <div className="loginMain_page">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad loginPage">
				<h2 className="MyAsset_heading">My Asset</h2>
				  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad backWhite">
					<h3 className="col-xs-12 nopad Login_header">Login</h3>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad mt30">
					 <ul className="fieldsUL">


								  <li className="fieldsLI">
								  <span className="validationIcn"></span>
								  <span className="input input--hoshi">
									<input className="input__field input__field--hoshi" type="email" id="emailID" ref="loginEmail"/>
									<label className="input__label input__label--hoshi input__label--hoshi-color-1">
									  <span className="input__label-content input__label-content--hoshi" aria-labelledby="emailID">Email id</span>
									</label>
									<span className="assetIocn icon-userid_line"></span>
								  </span>             
								</li>  
								 <li className="fieldsLI">
								  <span className="validationIcn"></span>
								  <span className="input input--hoshi">
									<input className="input__field input__field--hoshi" type="password" id="password" ref="LoginPassword"/>
									<label className="input__label input__label--hoshi input__label--hoshi-color-1" >
									  <span className="input__label-content input__label-content--hoshi" aria-labelledby="password">Password</span>
									</label>
									<span className="assetIocn icon-password_line"></span>
								  </span>             
								</li>  
					  </ul>  
					</div>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad mt40">
						<button className="col-xs-12 nopad login-btn" onClick={this.onClick}>Login</button>
					</div>
				  </div>

					<a href=""><span className="col-lg-12 col-md-12 col-sm-12 col-xs-12  nopad text-center mt20 forgotPass">Forgot password ?</span></a>
				</div>
			 </div>
		   </div>
		   </div>
		  </div>
		);
	else
		return(
			 <Imgspoc/>
		);
  },
	onClick: function(ev) {
		var email = this.refs.loginEmail.value;
		var password = this.refs.LoginPassword.value;
		var zzzz =this.Login(email, password);
    }
});


module.exports = Home;