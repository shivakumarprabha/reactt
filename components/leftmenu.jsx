import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import  {FormGroup ,Radio ,SplitButton ,tooltip ,DropdownButton,popover ,title,Modal ,ButtonToolbar,Button,Label,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown, Accordion,Panel, PanelGroup, Carousel,ProgressBar } from 'react-bootstrap'; 
import { Link, Router, Route, IndexRoute,browserHistory, hashHistory ,History} from "react-router";
import ScrollArea  from 'react-scrollbar';

const Leftmenu = React.createClass({
  getInitialState: function () {
    return {  
     }
    },


overlay:function(){
 document.getElementsByTagName("BODY")[0].className = document.getElementsByTagName("BODY")[0].className.replace("MobileMenu","");

 document.getElementsByTagName("BODY")[0].className="activeWorkFlow";
},


  render:function() {
    return<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad">
        <ul className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad">
            <Link to="imgspoc"><li className={this.props.activeTab==1?"col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad leftMenu_li active" : "col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad leftMenu_li"} onClick={this.overlay}>
                <div className="col-xs-2 nopad">
                  <span className="icon-location"></span>
                </div>
                <label className="col-xs-10 nopad">IMG SPOC</label>
            </li></Link>
            <Link to="myassetmainpage"> <li className={this.props.activeTab==2?"col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad leftMenu_li active" : "col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad leftMenu_li"} onClick={this.overlay}>
                <div className="col-xs-2 nopad">
                  <span className="icon-computer"></span>
                </div>
               <label className="col-xs-10 nopad">My asset</label>
            </li></Link>
              <Link to="additionalasset"><li className={this.props.activeTab==3?"col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad leftMenu_li active" : "col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad leftMenu_li"} onClick={this.overlay}>
                <div className="col-xs-2 nopad">
                  <span className="icon-circle_add"></span>
                </div>
               <label className="col-xs-10 nopad">Add additional asset</label>
            </li></Link>
             <Link to="assetconfirmation"><li className={this.props.activeTab==4?"col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad leftMenu_li active" : "col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad leftMenu_li"} onClick={this.overlay}>
                <div className="col-xs-2 nopad">
                  <span className="icon-Status_complete"></span>
                </div>
                <label className="col-xs-10 nopad">Asset confirmation</label>
            </li></Link>
             <Link to="admin"><li className={this.props.activeTab==5?"col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad leftMenu_li active" : "col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad leftMenu_li"} onClick={this.overlay}>
                <div className="col-xs-2 nopad">
                  <span className="icon-admin"></span>
                </div>
                <label className="col-xs-10 nopad">Admin</label>
            </li></Link>
             
        </ul>
    </div>
  }
});


module.exports = Leftmenu;




