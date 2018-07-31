import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory } from "react-router";
import ReactBootstrap from 'react-bootstrap';


import  { Radio,ListGroupItem,ListGroup,Carousel ,FormGroup ,ControlLabel ,FormControl ,Label,Accordion, Panel, Modal ,Button, ButtonGroup, OverlayTrigger , Popover,Tabs , Tab, DropdownButton, MenuItem, ProgressBar } from 'react-bootstrap';
import ScrollArea from 'react-scrollbar';

import tryParseJSON from 'try-parse-json';
import Header from './header.jsx';
import Leftmenu from './leftmenu.jsx';
import SPOCData from './SPOCData.jsx';


const Imgspoc = React.createClass({



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
                        <h1 className="col-xs-12 nopad my_asset_heding">IMG store locations</h1>

                      <ul className="col-xs-12 nopad forms_ul fieldsUL">


                                    <li className="col-xs-4 col-sm-4 col-md-3 col-lg-4 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="geo">GEO</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="geo">
                                         
										   <option value="1">--Select--</option> 
                                            <option value="2">Asia</option>
                                                               
                                            </select>
                                          </span>
                                      </li>
                                      <li className="col-xs-4 col-sm-4 col-md-3 col-lg-4 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="country_4">Country</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="country_4">
                                           <option value="1">--Select--</option> 
                                            <option value="2">Desktop</option>
                                            <option value="2">Laptop</option>
                                            <option value="2">Mobile</option>
                                            <option value="2">Printer</option>                   
                                            </select>
                                          </span>
                                      </li>
                                      <li className="col-xs-4 col-sm-4 col-md-3 col-lg-4 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="state_4">State</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="state_4">
                                           <option value="1">--Select--</option> 
                                            <option value="2">Karnataka</option>
                                            <option value="2">Maharashtra</option>
                                            <option value="2">Andra Pradesh</option>
                                            <option value="2">Tamilnadu</option>                   
                                            </select>
                                          </span>
                                      </li>
                                      <li className="col-xs-4 col-sm-4 col-md-3 col-lg-4 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="city_4">City</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="city_4">
                                           <option value="1">--Select--</option> 
                                            <option value="2">Bangalore</option>
                                            <option value="2">Pune</option>
                                            <option value="2">Channai</option>
                                            <option value="2">Hyderabad</option>                   
                                            </select>
                                          </span>
                                      </li>
                                      
                                      <li className="col-xs-4 col-sm-4 col-md-3 col-lg-4 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="office_4">Office</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="office_4">
                                           <option value="1">--Select--</option> 
                                            <option value="2">EC1</option>
                                            <option value="2">EC2</option>
                                            <option value="2">EC3</option>
                                            <option value="2">EC4</option>                 
                                            </select>
                                          </span>
                                      </li>
                                      <li className="col-xs-4 col-sm-4 col-md-9 col-lg-4 width100">
                                         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad paddingright">
                                          <button className="pull-right login-btn">filter</button>
                                         </div>
                                      </li>
                     </ul>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad mt20">          
							<div id='UserdetailsSPOC'/>
							<SPOCData/>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad mt20">
                              <button className="commo_btn" aria-label="previous"><span className="icon-arrow_drop_left"></span></button>
                              <button className="number_buttons active">1</button>
                              <button className="number_buttons ">2</button>
                              <button className="number_buttons ">3</button>
                              <button className="number_buttons ">4</button>
                               <button className="number_buttons ">5</button>
                              <button className="number_buttons ">6</button>
                              <button className="number_buttons ">7</button>
                               <button className="commo_btn" aria-label="next"><span className="icon-arrow_drop_right"></span></button>
							   
                            </div>
                    </div>
                                    
                   </div>
                  </div>


                <div className="col-xs-2 col-md-2 col-lg-2 no_pad LeftMenuMain">
                   <Leftmenu activeTab={1}/>
                </div>
          </div>
          
          
       </div>
      </div>
      );
  }
});
module.exports = Imgspoc;



