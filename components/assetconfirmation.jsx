import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory } from "react-router";
import ReactBootstrap from 'react-bootstrap';


import  { Radio,ListGroupItem,ListGroup,Carousel ,FormGroup ,ControlLabel ,FormControl ,Label,Accordion, Panel, Modal ,Button, ButtonGroup, OverlayTrigger , Popover,Tabs , Tab, DropdownButton, MenuItem, ProgressBar } from 'react-bootstrap';
import ScrollArea from 'react-scrollbar';


import Header from './header.jsx';
import Leftmenu from './leftmenu.jsx';

const Assetconfirmation = React.createClass({



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
                        <h1 className="col-xs-12 nopad my_asset_heding">Asset confirmation</h1>

                      <div className="col-lg-12 col-md-12 col-sm-12 xol-xs-12 nopad mt10">
                        <span className="col-xs-12 nopad info_msg">It is found that below assets are used by you but not tagged to you.<br />Please confirm for tagging to you.</span>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad mt20 backBlue padding15">
                     <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 width100 padd10">
                         <div className="float_text1"><span className="icon-computer colorwhite"></span></div>
                        <span className="color-white">Hardware - 16</span>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 width100 padd10">
                     <div className="float_text1"><span className="icon-mobile"></span></div>
                        <span className="color-white">Mobile - 1</span>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 width100 padd10">
                      <div className="float_text1"><span className="icon-virtual"></span></div>
                       <span className="color-white">Virtual - 4</span>
                     </div>
                    </div>
                                    


                    <div className="col-xs-12 nopad mt20 assetBorder">

                          <span className="col-xs-12 nopad assetLap">Asset 01 - Laptop</span>
                          <div className="col-lg-12 colmd-12 col-sm-12 col-xs-12 nopad padding15">
                            <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad asset_details">Asset details</span>
                          </div>

                          <ul className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad assetUl">
                              <li className="col-lg-3 col-md-4 col-sm-4 col-xs-4 nopad width100">
                                <label className="col-xs-12 nopad">Asset number</label>
                                <span className="col-xs-12 nopad fnt-family-medium">1865337773</span>
                              </li>
                              <li className="col-lg-3 col-md-4 col-sm-4 col-xs-4 nopad width100">
                                <label className="col-xs-12 nopad">Serial #</label>
                                <span className="col-xs-12 nopad fnt-family-medium">PFQPGD</span>
                              </li>
                              <li className="col-lg-3 col-md-4 col-sm-4 col-xs-4 nopad width100">
                                <label className="col-xs-12 nopad">Asset make</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Lenovo</span>
                              </li>
                          </ul>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad padding15">
                              <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad restriction">Restriction</label>
                              <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad fnt-family-medium">You can't re-tag this asset as it is under litigation hold. If you don't intend to use the asset, please release the same to IMG Stores. In case of any  further information required, please reach out to barathy.mullai@wipro.com</span>
                          </div>
                          <div className="col-lg-12 colmd-12 col-sm-12 col-xs-12 nopad padding15">
                            <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad asset_details">Asset location</span>
                          </div>
                          <ul className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad locationUl">
                              <li>
                                <label className="col-xs-12 nopad">GEO</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Asia</span>
                              </li>
                              <li>
                                <label className="col-xs-12 nopad">Country</label>
                                <span className="col-xs-12 nopad fnt-family-medium">India</span>
                              </li>
                              <li>
                                <label className="col-xs-12 nopad">State</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Karnataka</span>
                              </li>
                              <li>
                                <label className="col-xs-12 nopad">City</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Bangalore</span>
                              </li>
                              <li>
                                <label className="col-xs-12 nopad">Office</label>
                                <span className="col-xs-12 nopad fnt-family-medium">EC4</span>
                              </li>
                               <li>
                                <label className="col-xs-12 nopad">Tower</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Tower 8</span>
                              </li>
                               <li>
                                <label className="col-xs-12 nopad">Floor</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Ground floor</span>
                              </li> <li>
                                <label className="col-xs-12 nopad">Wing</label>
                                <span className="col-xs-12 nopad fnt-family-medium">C wing</span>
                              </li>
                               <li>
                                <label className="col-xs-12 nopad">Cubicle</label>
                                <span className="col-xs-12 nopad fnt-family-medium">C-011</span>
                              </li>
                          </ul>

                           <div className="col-lg-12 colmd-12 col-sm-12 col-xs-12 nopad padding15">
                            <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad asset_details">Allocation details</span>
                          </div>
                          <ul className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad locationUl">
                              <li>
                                <label className="col-xs-12 nopad">Allocated to primary</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Anujit roy</span>
                              </li>
                              <li>
                                <label className="col-xs-12 nopad">Allocated to custodian</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Rahul kishore</span>
                              </li>
                              <li>
                                <label className="col-xs-12 nopad">New primary user</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Binay raj</span>
                              </li>
                          </ul>


                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad padding15">
                                          <button className="pull-right login-btn margLeft10" onClick={this.showAccept_pop}>Accept</button>
                                          <button className="pull-right login-btn">Reject</button>
                          </div>
                    </div>


                    {/*********************/}
                     <div className="col-xs-12 nopad mt20 assetBorder">

                          <span className="col-xs-12 nopad assetLap">Asset 02 - Laptop</span>
                          <div className="col-lg-12 colmd-12 col-sm-12 col-xs-12 nopad padding15">
                            <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad asset_details">Asset details</span>
                          </div>

                          <ul className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad assetUl">
                              <li className="col-lg-3 col-md-4 col-sm-4 col-xs-4 nopad">
                                <label className="col-xs-12 nopad">Asset number</label>
                                <span className="col-xs-12 nopad fnt-family-medium">1865337773</span>
                              </li>
                              <li className="col-lg-3 col-md-4 col-sm-4 col-xs-4 nopad">
                                <label className="col-xs-12 nopad">Serial #</label>
                                <span className="col-xs-12 nopad fnt-family-medium">PFQPGD</span>
                              </li>
                              <li className="col-lg-3 col-md-4 col-sm-4 col-xs-4 nopad">
                                <label className="col-xs-12 nopad">Asset Name</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Lenovo</span>
                              </li>
                          </ul>

                          <div className="col-lg-12 colmd-12 col-sm-12 col-xs-12 nopad padding15">
                            <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad asset_details">Asset location</span>
                          </div>
                          <ul className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad locationUl">
                              <li>
                                <label className="col-xs-12 nopad">GEO</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Asia</span>
                              </li>
                              <li>
                                <label className="col-xs-12 nopad">Country</label>
                                <span className="col-xs-12 nopad fnt-family-medium">India</span>
                              </li>
                              <li>
                                <label className="col-xs-12 nopad">State</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Karnataka</span>
                              </li>
                              <li>
                                <label className="col-xs-12 nopad">City</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Bangalore</span>
                              </li>
                              <li>
                                <label className="col-xs-12 nopad">Office</label>
                                <span className="col-xs-12 nopad fnt-family-medium">EC4</span>
                              </li>
                               <li>
                                <label className="col-xs-12 nopad">Tower</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Tower 8</span>
                              </li>
                               <li>
                                <label className="col-xs-12 nopad">Floor</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Ground floor</span>
                              </li> <li>
                                <label className="col-xs-12 nopad">Wing</label>
                                <span className="col-xs-12 nopad fnt-family-medium">C wing</span>
                              </li>
                               <li>
                                <label className="col-xs-12 nopad">Cubicle</label>
                                <span className="col-xs-12 nopad fnt-family-medium">C-011</span>
                              </li>
                          </ul>

                           <div className="col-lg-12 colmd-12 col-sm-12 col-xs-12 nopad padding15">
                            <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad asset_details">Allocation details</span>
                          </div>
                          <ul className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad locationUl">
                              <li>
                                <label className="col-xs-12 nopad">Allocated to primary</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Anujit roy</span>
                              </li>
                              <li>
                                <label className="col-xs-12 nopad">Allocated to custodian</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Rahul kishore</span>
                              </li>
                              <li>
                                <label className="col-xs-12 nopad">New primary user</label>
                                <span className="col-xs-12 nopad fnt-family-medium">Binay raj</span>
                              </li>
                          </ul>


                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad padding15">
                                          <button className="pull-right login-btn margLeft10" onClick={this.showAccept_pop}>Accept</button>
                                          <button className="pull-right login-btn">Reject</button>
                          </div>
                    </div>

                    {/********************/}
                                    
                   </div>
                  </div>
                <div className="col-xs-2 col-md-2 col-lg-2 no_pad LeftMenuMain">
                   <Leftmenu activeTab={4}/>
                </div>
          </div>
          
          
       </div>
      </div>
      );
  }
});


module.exports = Assetconfirmation;