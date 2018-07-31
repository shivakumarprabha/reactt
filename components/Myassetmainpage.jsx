import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory } from "react-router";
import ReactBootstrap from 'react-bootstrap';


import  { Radio,ListGroupItem,ListGroup,Carousel ,FormGroup ,ControlLabel ,FormControl ,Label,Accordion, Panel, Modal ,Button, ButtonGroup, OverlayTrigger , Popover,Tabs , Tab, DropdownButton, MenuItem, ProgressBar } from 'react-bootstrap';
import ScrollArea from 'react-scrollbar';
import TextareaAutosize  from 'react-textarea-autosize';
import Header from './header.jsx';
import Leftmenu from './leftmenu.jsx';

import Additionalasset from './additionalasset.jsx';

const Myassetmainpage = React.createClass({



 getInitialState() {
    return {primary_secpndary:false, not_use:false, submit:false,accept:false, proceed:false, others:false, browse:false, hostnumber:false, assetName:false, loading:true};
      key: 1
  },
componentDidMount: function() {

initiateTextFields();

setTimeout(function(){ document.getElementsByTagName("BODY")[0].className="activeWorkFlow";  }, 500);


 },
 componentDidUpdate: function(prevProps, prevState){

   initiateTextFields();
},


 changePS(){
    this.setState({primary_secpndary:true, not_use:false,  proceed:false});
 },
 
show_notUse(){
    this.setState({primary_secpndary:false, not_use:true, proceed:false});
 },

 hideBoth(){
   this.setState({primary_secpndary:false, not_use:false, accept:true});
 },
 show_submit_pop(){
    this.setState({submit:true});
 },
 hide_submit_pop(){
  this.setState({submit:false});

 },

hideAccept_pop(){
  this.setState({accept:false});
},

onproceedClick(){
  this.setState({proceed:true, accept:false});
},

change: function(){ 

      var sel_value = document.getElementById("asset-type").value;   
     
      if( sel_value == 5 ){

       this.setState({others:true});
      
      }
      else{
       this.setState({others:false});
      
      }

    },
change1: function(){ 
 
       var img1 = document.getElementById('img1');
        var file_name = document.getElementById('file_name1');
        var fileNameIndex = img1.value.lastIndexOf("\\");

        file_name.value = img1.value.substring(fileNameIndex + 1);

},
browserClick(){
     this.setState({browse:true});
},
hideBrowse(){
  this.setState({browse:false});
},
 handleCharactersCount:function(event) {
    var input = event.target.value;
    this.setState({
       chars_count:min_chars + input.length
    });
},
show_hostnumber(){

  this.setState({hostnumber:true});
},
hide_hostnumber(){
  this.setState({hostnumber:false});
},
show_assetName(){

  this.setState({assetName:true});
},
hide_assetName(){
  this.setState({assetName:false});
},
hide_loadingpop(){
  this.setState({loading:false});
},

  render() {

    let close = () => this.setState({ show: false});

    return (
    
    <div className="container">

{/*********************************loading error popup**************************************/}

              <div className="modal-container">
                            <Modal className="modal-workflow submit_pop"
          show={this.state.loading}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title">

         
          <Modal.Body>
               
               <div className="col-xs-12 nopad back_whte">
                     <div className="col-xs-12 nopad">
                        <span className="pop_head_msg">Error!</span><button  onClick={this.hide_loadingpop} araia-label="close popup" className="close_btn"><span className="icon-close"></span></button>
                     </div>
                    <div className="col-xs-12 nopad mt20">
                          <p className="col-xs-12 nopad msgP">Sorry, asset data could not be loaded, please try to declare your IT assets after some time</p>

                         
                    </div>
                     <div className="col-xs-12 nopad mt20">
                              <button className="pull-right login-btn" onClick={this.hide_loadingpop}>ok</button> 
                             
                     </div>
               </div>
                 
          </Modal.Body>
          <Modal.Footer>
          
          </Modal.Footer>
        </Modal>
        </div>


    
    {/***********************************************************************/}
     {/******************************proceed popup*****************************************/}

              <div className="modal-container">
                            <Modal className="modal-workflow submit_pop"
          show={this.state.accept}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title">

         
          <Modal.Body>
               
               <div className="col-xs-12 nopad back_whte">
                     <div className="col-xs-12 nopad">
                        <span className="pop_head_msg">Warning</span><button  onClick={this.hideAccept_pop} araia-label="close popup" className="close_btn"><span className="icon-close"></span></button>
                     </div>
                    <div className="col-xs-12 nopad mt20">
                          <p className="col-xs-12 nopad msgP">Sorry, you can't use this option for declaring multiple Desktops/Laptops. Use this option only against the assets used by you. In case the Desktop/Laptop tagged to you is used by a different employee, you can retag the assets to the new user by selecting the option <b>"Change Primary / Secondary User".</b></p>

                          <p className="col-xs-12 nopad msgP">Please release the unused/excess assets tagged against your name by using this path: <b>"My Wipro -> APP Store -> Information -> My Asset -> This asset not in use -> To be returned to IMG".</b></p>

                          <p className="col-xs-12 nopad msgP">In case, if you still want to go ahead and own the asset against your name, please click on proceed button and select justification option from the dropdown list and click on submit.</p>
                    </div>
                     <div className="col-xs-12 nopad mt20">
                              <button className="pull-right login-btn margLeft10" onClick={this.hideAccept_pop}>cancel</button> 
                              <button className="pull-right login-btn" onClick={this.onproceedClick}>proceed</button>
                     </div>
               </div>
                 
          </Modal.Body>
          <Modal.Footer>
          
          </Modal.Footer>
        </Modal>
        </div>


    
    {/***********************************************************************/}

    {/***********************************submit popup************************************/}

              <div className="modal-container">
                            <Modal className="modal-workflow submit_pop"
          show={this.state.submit}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title">

         
          <Modal.Body>
               
               <div className="col-xs-12 nopad back_whte">
                     <div className="col-xs-12 nopad">
                        <span className="pop_head_msg">Warning</span><button  onClick={this.hide_submit_pop} aria-label="close popup" className="close_btn"><span className="icon-close"></span></button>
                     </div>
                    <div className="col-xs-12 nopad mt20">
                          <p className="col-xs-12 nopad msgP">Your current IT asset declaration as "not aware of the asset" is incorrect. This asset was declared by you on 01/10/2017 as personally used by me. Please re-check and declare correctly. Incorrect declaration as "not aware of the asset" may lead to desciplinary action.  </p>
                    </div>
                     <div className="col-xs-12 nopad mt20">
                              <button className="pull-right login-btn" onClick={this.hide_submit_pop}>ok</button> 
                     </div>
               </div>
                 
          </Modal.Body>
          <Modal.Footer>
          
          </Modal.Footer>
        </Modal>
        </div>


    
    {/***********************************************************************/}
   		 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad">
          <Header />
          <div className="col-xs-12 no_pad header_leftmenu">
                <div className="col-xs-9 col-md-10 col-lg-10 no_pad right_section">
                    <div className="col-lg-12 col-md-12 col-sm-12 xol-xs-12 nopad padd30">
        <h1 className="col-xs-12 nopad my_asset_heding">Myasset</h1>

      <ul className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad workflow_ul">
          <li className="col-lg-4 col-md-4 col-sm-12 col-xs-12 nopad ttlAsset">
              <div className="col-lg-12 col-md-12 col-sm-12 xol-xs-12 nopad borderAll">
                  <div className="col-xs-4 nopad">
                  <div className="redDiv"><span className="icon-assets"></span></div>

                  </div>
                  <div className="col-xs-8 nopad">
                    <span className="col-xs-12 noRed">16</span>
                     <span className="col-xs-12 redText">Total no of assets</span>
                  </div>
              </div>
          </li>
          <li className="col-lg-4 col-md-4 col-sm-12 col-xs-12 nopad undeclared">
              <div className="col-lg-12 col-md-12 col-sm-12 xol-xs-12 nopad borderAll">
                  <div className="col-xs-4 nopad">
                    <div className="blueDiv">
                      <span className="icon-assets_undeclared"></span>
                    </div>
                  </div>
                  <div className="col-xs-8 nopad">
                    <span className="col-xs-12 noBlue">01</span>
                     <span className="col-xs-12 blueText">Undeclared assets</span>
                  </div>
              </div>
          </li>
          <li className="col-lg-4 col-md-4 col-sm-12 col-xs-12 nopad declared">
              <div className="col-lg-12 col-md-12 col-sm-12 xol-xs-12 nopad borderAll">
                  <div className="col-xs-4 nopad">
                    <div className="greenDiv">
                      <span className="icon-assets_declared"></span>
                    </div>
                  </div>
                  <div className="col-xs-8 nopad">
                    <span className="col-xs-12 noGreen">02</span>
                     <span className="col-xs-12 greenText">Declared assets</span>
                  </div>
              </div>
          </li>
      </ul>


      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad">
          <Accordion defaultActiveKey={"1"} className="col-xs-12 no_pad LeftMenuAccord">
              <Panel header="Undeclared assets" eventKey="1" className="LeftPanel IT-Services">
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad">

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
                              <li className="col-lg-3 col-md-4 col-sm-6 col-xs-4 nopad width100">
                                <label className="col-xs-12 nopad" htmlFor="host_name">Host name</label>
                                <span className="pull-left fnt-family-medium" id="host_name">L-1865337773</span><span className="pull-left margLeft10 cursorPointer icon-info" onMouseEnter={this.show_hostnumber} onMouseLeave={this.hide_hostnumber}></span>
                              </li>


                               {this.state.hostnumber?<div className="hoverImages">
                                 <div className="col-xs-12 nopad innerHover">
                                 <span className="col-xs-12 nopad fntsize12">1) Please refer to the asset number sticker pasted on your asset</span>
                                    <span className="hoverImg"></span>
                                    <span className="col-xs-12 nopad fntsize12">2) In case if you are not able to locate the asset number sticker on your asset, please follow the below mentioned path for finding your asset number:<br />
                                    Right click on your My Computer-> Select Properties-> Find the computer name</span>
                                    <span className="hoverImg2"></span>
                                 </div>
                                </div>:<null />}


                              <li className="col-lg-3 col-md-4 col-sm-6 col-xs-4 nopad width100">
                                <label className="col-xs-12 nopad" htmlFor="asset_number">Asset number</label>
                                <span className="pull-left fnt-family-medium" id="asset_number">1865337773</span><span className="pull-left margLeft10 cursorPointer icon-info" onMouseEnter={this.show_assetName} onMouseLeave={this.hide_assetName}></span>
                              </li>

                              {this.state.assetName?<div className="hoverImages_assetnumber">
                                 <div className="col-xs-12 nopad innerHover">
                                 <span className="col-xs-12 nopad fntsize12">1) Please refer to the asset number sticker pasted on your asset</span>
                                    <span className="hoverImg"></span>
                                    <span className="col-xs-12 nopad fntsize12">2) In case if you are not able to locate the asset number sticker on your asset, please follow the below mentioned path for finding your asset number:<br />
                                    Right click on your My Computer-> Select Properties-> Find the computer name</span>
                                    <span className="hoverImg2"></span>
                                 </div>
                                </div>:<null />}

                              <li className="col-lg-3 col-md-4 col-sm-6 col-xs-4 nopad width100">
                                <label className="col-xs-12 nopad" htmlFor="serial">Serial #</label>
                                <span className="col-xs-12 nopad fnt-family-medium" id="serial">PFQPFD</span>
                              </li>
                              <li className="col-lg-3 col-md-4 col-sm-6 col-xs-4 nopad width100">
                                <label className="col-xs-12 nopad" htmlFor="asset_desicription">Asset description</label>
                                <span className="col-xs-12 nopad fnt-family-medium" id="asset_desicription">Thinkpad L450</span>
                              </li>
                              <li className="col-lg-3 col-md-4 col-sm-6 col-xs-4 nopad width100">
                                <label className="col-xs-12 nopad" htmlFor="eligible_date">End of life eligible date</label>
                                <span className="col-xs-12 nopad fnt-family-medium" id="eligible_date">08.01.2020</span>
                              </li>
                              <li className="col-lg-3 col-md-4 col-sm-6 col-xs-4 nopad width100">
                                <label className="col-xs-12 nopad" htmlFor="allocation_date">Allocation date</label>
                                <span className="col-xs-12 nopad fnt-family-medium" id="allocation_date">01.01.2014</span>
                              </li>
                              <li className="col-lg-3 col-md-4 col-sm-6 col-xs-4 nopad width100">
                                <label className="col-xs-12 nopad" htmlFor="custodian">Custodian</label>
                                <span className="col-xs-12 nopad fnt-family-medium" id="custodian">Mohanj jayaram</span>
                              </li>
                          </ul>

                           <div className="col-lg-12 colmd-12 col-sm-12 col-xs-12 nopad padding15 mt20">
                            <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad asset_details">Asset Location</span>
                          </div>

                          <ul className="fieldsUL">


                            <li className="fieldsLI4">
                              <span className="validationIcn"></span>
                              <span className="input input--hoshi">
                                <input className="input__field input__field--hoshi" type="text" id="office"/>
                                <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                  <span className="input__label-content input__label-content--hoshi" aria-labelledby="office">Office</span>
                                </label>
                              </span>             
                            </li>  
                             <li className="fieldsLI4">
                              <span className="validationIcn"></span>
                              <span className="input input--hoshi">
                                <input className="input__field input__field--hoshi" type="text" id="tower"/>
                                <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                  <span className="input__label-content input__label-content--hoshi" aria-labelledby="tower">Tower</span>
                                </label>
                              </span>             
                            </li>
                            <li className="fieldsLI4">
                              <span className="validationIcn"></span>
                              <span className="input input--hoshi">
                                <input className="input__field input__field--hoshi" type="text" id="floor"/>
                                <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                  <span className="input__label-content input__label-content--hoshi" aria-labelledby="floor">Floor</span>
                                </label>
                              </span>             
                            </li>  
                             <li className="fieldsLI4">
                              <span className="validationIcn"></span>
                              <span className="input input--hoshi">
                                <input className="input__field input__field--hoshi" type="text" id="wing"/>
                                <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                  <span className="input__label-content input__label-content--hoshi" aria-labelledby="wing">Wing</span>
                                </label>
                              </span>             
                            </li>   
                            <li className="fieldsLI4">
                              <span className="validationIcn"></span>
                              <span className="input input--hoshi">
                                <input className="input__field input__field--hoshi" type="text" id="cubicle"/>
                                <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                  <span className="input__label-content input__label-content--hoshi" aria-labelledby="cubicle">Cubicle</span>
                                </label>
                              </span>             
                            </li>
                        </ul> 

                        <div className="col-xs-12 nopad radioDiv">
                                  <ul className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no_pad inner-ul">
                                          <li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no_pad">
                                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4no_pad radio-btn" onClick={this.hideBoth}>
                                              <input type="radio" value="sow" id="Radio 1" name="reference"/>
                                              <label htmlFor="Radio 1" className="pull-left text-capitalize">I'm using it</label>
                                            </div>
                                          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 no_pad radio-btn" onClick={this.changePS}>
                                                <input type="radio" value="Radio 2" id="Radio 2" name="reference" />
                                               <label htmlFor="Radio 2" className="pull-left text-capitalize">Change primary/secondary user</label>
                                          </div>
                                           <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 no_pad radio-btn" onClick={this.show_notUse}>
                                                <input type="radio" value="Radio 3" id="Radio 3" name="reference" />
                                               <label htmlFor="Radio 3" className="pull-left text-capitalize">This asset not in use</label>
                                          </div>
                                        </li>
                                  </ul>
                        </div> 
                        {this.state.proceed?<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad">
                           <ul className="col-xs-12 nopad forms_ul fieldsUL">


                                    <li className="col-xs-5 col-sm-4 col-md-3 col-lg-4 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="asset-type">Select reason</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red select_rec" id="asset-type" onChange={this.change}>
                                           <option value="0">--Select--</option> 
                                            <option value="1">Used for on call support</option>
                                            <option value="2">Used for testing tab</option>
                                            <option value="3">Used in restricted ODC</option>
                                            <option value="4">Used for cutomer demo's</option>  
                                            <option value="5">Others</option>                 
                                            </select>
                                          </span>
                                      </li>
                                      {this.state.others?<li className="fieldsLI2">
              <span className="input input--hoshi">
               <TextareaAutosize  className="input__field input__field--hoshi" onChange={this.handleCharactersCount} maxLength="500" />
                <label className="input__label input__label--hoshi input__label--hoshi-color-1" for="desc">
                  <span className="input__label-content input__label-content--hoshi">Remarks</span>
                </label>
              </span> 
               
           </li>:<null />}

                            </ul>
                        </div>:<null />}

                          {this.state.primary_secpndary?<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad mt20">
                              <ul className="fieldsUL">


                            <li className="fieldsLI2">
                              <span className="validationIcn"></span>
                              <span className="input input--hoshi">
                                <input className="input__field input__field--hoshi" type="text" id="primary-user"/>
                                <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                  <span className="input__label-content input__label-content--hoshi" aria-labelledby="primary-user">Primary user</span>
                                </label>
                              </span>             
                            </li> 
                            <li className="fieldsLI2">
                              <span className="validationIcn"></span>
                              <span className="input input--hoshi">
                                <input className="input__field input__field--hoshi" type="text" id="secondary-user"/>
                                <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                  <span className="input__label-content input__label-content--hoshi" aria-labelledby="secondary-user">Secondary user</span>
                                </label>
                              </span>             
                            </li> 
                          </ul>
                          </div>:<null />}

                       {this.state.not_use?<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad mt20">
                                <ul className="col-xs-12 nopad forms_ul">


                                    <li className="col-xs-12 col-sm-6 col-md-5 col-lg-5">
                                        <label className="col-xs-12 no_pad" htmlFor="select-remark">Select remark</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="select-remark">
                                           <option value="1">--Select--</option> 
                                            <option value="2">Asset already handed over to IMG</option>
                   
                                              </select>
                                          </span>
                                      </li>
                                       <li className="col-xs-12 col-sm-6 col-md-5 col-lg-5">
                                       <input type="file" name="" className="col-xs-12 nopad fileText" onChange={this.change1} onClick={this.browserClick} id="img1"/>
                                       <input type="text" name="" className="col-xs-12 nopad browseText" placeholder="Upload proof documents" />
                                        <span className="uploadIcon icon-file_upload"></span>
                                      </li>
                           
                                  </ul>
                                  
                                  {this.state.browse?<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 nopad valueBorder">
                                         <input type="" id="file_name1" name="file_name1" className="valueTextbox"/>
                                         <span className="pull-right icon-close mrg5 cursorPointer" onClick={this.hideBrowse}></span>
                                      </div>
                                  </div>:<null />}
                                  

                          <div className="col-lg-12 colmd-12 col-sm-12 col-xs-12 nopad padding15 mt10">
                            <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad asset_details">Asset Location</span>
                          </div>
                                <ul className="col-xs-12 nopad forms_ul">


                                    <li className="col-xs-4 col-sm-4 col-md-4 col-lg-3 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="office-1">Office</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="office-1">
                                           <option value="1">--Select--</option> 
                                            <option value="2">EC1</option>
                                            <option value="2">EC2</option>
                                            <option value="2">EC3</option>
                                            <option value="2">EC4</option>
                   
                                              </select>
                                          </span>
                                      </li>
                                      <li className="col-xs-4 col-sm-4 col-md-4 col-lg-3 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="sub-office">Sub office</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="sub-office">
                                           <option value="1">--Select--</option> 
                                            <option value="2">EC1</option>
                                            <option value="2">EC2</option>
                                            <option value="2">EC3</option>
                                            <option value="2">EC4</option>
                   
                                              </select>
                                          </span>
                                      </li>
                                      <li className="col-xs-4 col-sm-4 col-md-4 col-lg-3 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="tower-1">Tower</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="tower-1">
                                           <option value="1">--Select--</option> 
                                            <option value="2">Tower 1</option>
                                            <option value="2">Tower 2</option>
                                            <option value="2">Tower 3</option>
                                            <option value="2">Tower 4</option>
                   
                                              </select>
                                          </span>
                                      </li>
                                      <li className="col-xs-4 col-sm-4 col-md-4 col-lg-3 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="floor-1">Floor</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="floor-1">
                                           <option value="1">--Select--</option> 
                                            <option value="2">Ground Floor </option>
                                            <option value="2">First Floor</option>
                                            <option value="2">Second Floor</option>
                                            <option value="2">Third Floor</option>
                   
                                              </select>
                                          </span>
                                      </li>
                                      <li className="col-xs-4 col-sm-4 col-md-4 col-lg-3 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="wing-1">Wing</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="wing-1">
                                           <option value="1">--Select--</option> 
                                            <option value="2">A wing</option>
                                            <option value="2">B wing</option>
                                            <option value="2">C wing</option>
                   
                                              </select>
                                          </span>
                                      </li>
                                      <li className="col-xs-4 col-sm-4 col-md-4 col-lg-3 width100">
                                        <label className="col-xs-12 no_pad" htmlFor="cubicle-1">Cubicle</label>
                                       <span className="col-xs-12 no_pad custom-dropdown custom-dropdown--red">
                                          <select className="custom-dropdown__select custom-dropdown__select--red" id="cubicle-1">
                                           <option value="1">--Select--</option> 
                                            <option value="2">11</option>
                                            <option value="2">36</option>
                                            <option value="2">12</option>
                                            <option value="2">46</option>
                   
                                              </select>
                                          </span>
                                      </li>
                           
                                  </ul>


                       </div>:<null />}
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad padding15">
                              <button className="pull-right login-btn" onClick={this.show_submit_pop}>submit</button>
                        </div>

                      </div>
               </div>
              </Panel>
              <Panel header="Declared assets" eventKey="2" className="LeftPanel IT-Services">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad padding15">
                Declared Assets
                </div>
              </Panel>
          </Accordion>
      </div>


      {/*****************************************************no asset message**************************/}

      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad mt20">
          <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad">No asset is tagged to your id. If you do not hold any Wipro provided assets, please click on the below button to complete the declaration</span>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad mt20">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad padding15">
                              <button className="pull-right login-btn">no wipro provided assets</button>
                        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad mt20">
        <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad">If you are using a Wipro provided asset which is not displayed here, please declare it as an additional asset through the option <b>"ADD ADDITIONAL ASSET"</b>.</span>
      </div>

      {/***********************************************************************************************/}

   </div>
                </div>







                <div className="col-xs-2 col-md-2 col-lg-2 no_pad LeftMenuMain">
                   <Leftmenu activeTab={2}/>
                </div>
          </div>
          
          
       </div>
      </div>
    );
  }
});


module.exports = Myassetmainpage;