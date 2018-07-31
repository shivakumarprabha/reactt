import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory } from "react-router";
import ReactBootstrap from 'react-bootstrap';


import  { Radio,ListGroupItem,ListGroup,Carousel ,FormGroup ,ControlLabel ,FormControl ,Label,Accordion, Panel, Modal ,Button, ButtonGroup, OverlayTrigger , Popover,Tabs , Tab, DropdownButton, MenuItem, ProgressBar } from 'react-bootstrap';
import ScrollArea from 'react-scrollbar';


import Header from './header.jsx';
import Leftmenu from './leftmenu.jsx';

const Additionalasset = React.createClass({



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
                        <h1 className="col-xs-12 nopad my_asset_heding">Add additional asset</h1>

                        <ul className="col-xs-12 nopad forms_ul fieldsUL">


                                    <li className="col-xs-4 col-sm-4 col-md-3 col-lg-4 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="asset-type">Asset type</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="asset-type">
                                           <option value="1">--Select--</option> 
                                            <option value="2">Desktop</option>
                                            <option value="2">Laptop</option>
                                            <option value="2">Mobile</option>
                                            <option value="2">Printer</option>                   
                                            </select>
                                          </span>
                                      </li>
                                       <li className="col-xs-4 col-sm-4 col-md-3 col-lg-4 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="location">Location</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="location">
                                           <option value="1">--Select--</option> 
                                            <option value="2">EC1</option>
                                            <option value="2">EC2</option>
                                            <option value="2">EC3</option>
                                            <option value="2">EC4</option>
                   
                                              </select>
                                          </span>
                                      </li>
                                      <li className="fieldsLI3">
                                        <span className="validationIcn"></span>
                                        <span className="input input--hoshi">
                                          <input className="input__field input__field--hoshi" type="text" id="serial-number"/>
                                          <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                            <span className="input__label-content input__label-content--hoshi" aria-labelledby="serial-number">Serial number</span>
                                          </label>
                                        </span>             
                                      </li> 
                                      <li className="col-xs-4 col-sm-4 col-md-3 col-lg-4 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="tower-2">Tower</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="tower-2">
                                           <option value="1">--Select--</option> 
                                            <option value="2">Tower 123</option>
                                            <option value="2">Tower 45</option>
                                            <option value="2">Tower 6</option>
                                            <option value="2">Tower 7</option>
                   
                                              </select>
                                          </span>
                                      </li>
                                      <li className="fieldsLI3">
                                        <span className="validationIcn"></span>
                                        <span className="input input--hoshi">
                                          <input className="input__field input__field--hoshi" type="text" id="asset_number"/>
                                          <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                            <span className="input__label-content input__label-content--hoshi" aria-labelledby="asset_number">Asset number</span>
                                          </label>
                                          <span className="assetIocn icon-info"></span>
                                        </span>             
                                      </li>
                                      <li className="col-xs-4 col-sm-4` col-md-3 col-lg-4 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="floor-2">Floor</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="floor-2">
                                           <option value="1">--Select--</option> 
                                            <option value="2">Ground floor</option>
                                            <option value="2">First floor</option>
                                            <option value="2">Second floor</option>
                                            <option value="2">Third floor</option>
                   
                                              </select>
                                          </span>
                                      </li>
                                      <li className="fieldsLI3">
                                        <span className="validationIcn"></span>
                                        <span className="input input--hoshi">
                                          <input className="input__field input__field--hoshi" type="text" id="cubicle-2"/>
                                          <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                            <span className="input__label-content input__label-content--hoshi" aria-labelledby="cubicle-2">Cubicle</span>
                                          </label>
                                        </span>             
                                      </li>
                                      <li className="fieldsLI3">
                                        <span className="validationIcn"></span>
                                        <span className="input input--hoshi">
                                          <input className="input__field input__field--hoshi" type="text" id="wing-2"/>
                                          <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                            <span className="input__label-content input__label-content--hoshi" aria-labelledby="wing-2">Wing</span>
                                          </label>
                                        </span>             
                                      </li>
                                     </ul> 

                                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad padding15">
                                          <button className="pull-right login-btn">submit</button>
                                    </div>


                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad mb20">
                                        <h3 className="col-xs-12 nopad fnt-size13">Additional asset - Pending verification</h3>

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad mt10">
                                            <table className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad addtnl-asset-table">
                                              <thead>
                                                <tr>
                                                  <th>Asset number</th>
                                                  <th>Asset type</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td>901254876</td>
                                                  <td>VOIP</td>
                                                </tr>
                                                <tr>
                                                  <td>901254876</td>
                                                  <td>Datacard</td>
                                                </tr>
                                                <tr>
                                                  <td>901254876</td>
                                                  <td>Laptop</td>
                                                </tr>
                                                <tr>
                                                  <td>901254876</td>
                                                  <td>Router</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                        </div>
                                    </div>
                   </div>
                  </div>
                <div className="col-xs-2 col-md-2 col-lg-2 no_pad LeftMenuMain">
                   <Leftmenu activeTab={3}/>
                </div>
          </div>
          
          
       </div>
      </div>
      );
  }
});


module.exports = Additionalasset;