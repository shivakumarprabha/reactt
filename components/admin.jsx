import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory } from "react-router";
import ReactBootstrap from 'react-bootstrap';
import  { Radio,ListGroupItem,ListGroup,Carousel ,FormGroup ,ControlLabel ,FormControl ,Label,Accordion, Panel, Modal ,Button, ButtonGroup, OverlayTrigger , Popover,Tabs , Tab, DropdownButton, MenuItem, ProgressBar } from 'react-bootstrap';
import ScrollArea from 'react-scrollbar';
import Header from './header.jsx';
import Leftmenu from './leftmenu.jsx';

const Admin = React.createClass({



 getInitialState() {
    return {};
      key: 1
  },
componentDidMount: function() {

initiateTextFields();


 },
 componentDidUpdate: function(prevProps, prevState){

   initiateTextFields();
},


 


  render() {

    let close = () => this.setState({ show: false});

    return (
    
   <div className="container">
       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad">
          <Header />
          <div className="col-xs-12 no_pad header_leftmenu">
                <div className="col-xs-9 col-md-10 col-lg-10 no_pad right_section">
                   <div className="col-lg-12 col-md-12 col-sm-12 xol-xs-12 nopad padd30">
                        <h1 className="col-xs-12 nopad my_asset_heding">Admin</h1>

                     <div className="col-lg-12 col-md-12 col-sm-12 xol-xs-12 nopad mt20">
                        <ul className="fieldsUL">


                            <li className="fieldsLI3">
                              <span className="validationIcn"></span>
                              <span className="input input--hoshi">
                                <input className="input__field input__field--hoshi" type="text" id="emp_number"/>
                                <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                  <span className="input__label-content input__label-content--hoshi" aria-labelledby="emp_number">Employee number / AD ID</span>
                                </label>
                              </span>             
                            </li> 
                            <li className="fieldsLI3">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad padding15">
                                          <button className="float_text login-btn">View my asset</button>
                                    </div>
                            </li> 
                        </ul>
                     </div>
                     
                                    

                                    
                   </div>
                  </div>


                <div className="col-xs-2 col-md-2 col-lg-2 no_pad LeftMenuMain">
                   <Leftmenu activeTab={5}/>
                </div>
          </div>
          
          
       </div>
      </div>
      );
  }
});


module.exports = Admin;