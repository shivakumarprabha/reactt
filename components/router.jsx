import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory } from "react-router";
import ReactBootstrap from 'react-bootstrap';

import  { Radio,ListGroupItem,ListGroup,Carousel ,FormGroup ,ControlLabel ,FormControl ,Label,Accordion, Panel, Modal ,Button, ButtonGroup, OverlayTrigger , Popover    } from 'react-bootstrap';

import Home from './home.jsx';
import Myassetmainpage from './myassetmainpage.jsx';
import Header from './header.jsx';
import Leftmenu from './leftmenu.jsx';
import Additionalasset from './additionalasset.jsx';
import Assetconfirmation from './assetconfirmation.jsx';
import Admin from './admin.jsx';
import Imgspoc from './imgspoc.jsx';




ReactDOM.render((
  <Router>
		<Route path="/" component={Home} ></Route>
		<Route path="myassetmainpage" component={Myassetmainpage}></Route>
		<Route path="header" component={Header}></Route>
		<Route path="leftmenu" component={Leftmenu}></Route>
		
		<Route path="additionalasset" component={Additionalasset}></Route>
		<Route path="assetconfirmation" component={Assetconfirmation}></Route>
		<Route path="admin" component={Admin}></Route>
		<Route path="imgspoc" component={Imgspoc}></Route>
	
  </Router>
), document.getElementById('root'))