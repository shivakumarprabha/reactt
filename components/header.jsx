import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import  {FormGroup ,Radio ,SplitButton ,tooltip ,DropdownButton,popover ,title,Modal ,ButtonToolbar,Button,Label,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup, Carousel,ProgressBar } from 'react-bootstrap'; 
import { Link, Router, Route, IndexRoute,browserHistory, hashHistory ,History} from "react-router";

const Header = React.createClass({
    getInitialState: function () {
    return {  
     search:false
    }
  },

 searchContent: function(){

this.setState({search:true});

  },
closeSearch:function(){

  this.setState({search:false});
},
burgerMenu:function(){

document.getElementsByTagName("BODY")[0].className="MobileMenu";

},
overlay:function(){
 document.getElementsByTagName("BODY")[0].className = document.getElementsByTagName("BODY")[0].className.replace("MobileMenu","");
 
 document.getElementsByTagName("BODY")[0].className="activeWorkFlow";
},
  render:function() {


    return<header className="col-xs-12 header_cls">
       <div className="overley-Mobile" onClick={this.overlay}></div>
    		<div className="pull-left mywiplogo_img">
        <button className="menu_mobile icon-burger_menu" onClick={this.burgerMenu}></button>
    			
    			<a href=""><span className="pull-left logo_text title_cls">MyAsset</span>	</a>
          
    		</div>
   			<a href="" className="pull-right"><span className="icon-logout"></span></a>
		  </header>
  }
});


module.exports = Header;




