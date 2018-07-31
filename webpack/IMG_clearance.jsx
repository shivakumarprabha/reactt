import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import  {FormGroup ,Row,Col,Radio ,SplitButton ,tooltip,ProgressBar,DropdownButton,popover ,title,Modal ,ButtonToolbar,Button,Label,Carousel,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup } from 'react-bootstrap';
import { Router, Route, Link, browserHistory, History ,Navigation} from 'react-router';
import axios from 'axios';
import linkState from 'react-link-state';
import moment from 'moment';
import CheckBox from './checkbox.jsx';
import Alertplugin from './alertplugin.jsx';

var geoObject = [];
 var countryObject = [];
  var stateObject = [];
 var cityObject = [];
  var locationObject = [];
  
axios.defaults.headers['appId'] =  "EMPEXIT";

var actResult = "";
var geoResult = "";
const IMGClearance = React.createClass({
mixins: [Navigation],
displayName:'IMGClearance',
	getInitialState: function(){
	return{
		addClass:true,
		overlayActive:false,
		activeBtn:true,
		yesBtn:false,
		yesBtn2:false,
		showHighPop:false,
		 alertTxt: [],
		 hwError:false,
		 telecomError : false,
		 bridgeError : false,
		 bridgeStat:false,
		telecomObject:'',hardwareObject:'',softwareObject:'',ByodObject:'',BridgeObject:'',
	telSurRet:1,hwGeoError:'',hardwareGeoObject:[],
geoObjectFinal:[],countryObjectFinal:[],stateObjectFinal:[],cityObjectFinal:[],locationObjectFinal:[]};
	},
	contextTypes: {
			router: React.PropTypes.object.isRequired,
    img_telecom: React.PropTypes.string,
	img_telecom_sur: React.PropTypes.string,
	img_hardware: React.PropTypes.string,
	img_hardware_redirection: React.PropTypes.string,
	img_hardware_geo: React.PropTypes.string,
	img_software: React.PropTypes.string,
	img_byod: React.PropTypes.string,
	img_telecom_bridge: React.PropTypes.string,
	img_telecom_bridge_sur: React.PropTypes.string
	},

	componentWillMount: function(){
		
	},
	componentWillUnmount: function(){
		
	},
	componentDidMount: function(){
		this.getHardwareObject(); 
		this.getHardwareGeoObject();
	},
	
getTelecomInitialState:function(){
	var _this = this;
	axios.defaults.headers['uid'] =  "EURL034";
	axios.get(this.context.img_telecom).
  then(function(result){
  _this.setState({
    telecomObject : result.data
    });
  }); 

axios.defaults.headers['uid'] =  "EURL035";
	axios.get(this.context.img_telecom_bridge).
  then(function(result1){
  _this.setState({
    BridgeObject : result1.data
    });
  }); 

},

getHardwareObject:function(){
   var _this = this;

 axios.defaults.headers['uid'] =  "EURL036";
	axios.get(this.context.img_hardware).
  then(function(result){ 
	  if(result.status == 200){
		   for(var j = 0; j < result.data.length; j++) {
		   if(j > "75"){
		   actResult = actResult + result.data[j];
		   if(result.data[j]  == "]"){
			   break;
		   		}
		   }       
       } 
	    _this.setState({
   			 hardwareObject : JSON.parse(actResult)
    			});   
			  }else{
				   _this.setState({
   			 hwError : true
    			});
			  }
}).catch(function (error) {
			  _this.setState({
   			 hwError : true
    			});
			});			 
},

getHardwareGeoObject:function(){
	var that= this;

axios.get(this.context.img_hardware_geo).
	   then(function(result1){  
           if(result1.status == 200){
		        for(var k = 0; k < result1.data.length; k++) {
		   if(k > "75"){
			   
		   geoResult = geoResult + result1.data[k];
		   if(result1.data[k]  == "]"){
			   break;
		   		}
		   }   		    
       }   
 JSON.parse(geoResult).some(function(result,index){
 geoObject=geoObject.concat(result.GEOName);
 countryObject=countryObject.concat(result.Country);
 stateObject=stateObject.concat(result.State);
 cityObject=cityObject.concat(result.City);
 locationObject=locationObject.concat(result.Location);
});
that.setState({
		 geoObjectFinal:geoObject,
		 countryObjectFinal:countryObject,
		 stateObjectFinal:stateObject,
		 cityObjectFinal:cityObject,
		 locationObjectFinal:locationObject
	 });

		}else{
				   that.setState({
   			 hwGeoError : true
    			});
			  }
	   }).catch(function (error) {
			  that.setState({
   			 hwGeoError : true
    			});
			});
},

getGeoLocationList:function(){
     this.state.hardwareGeoObject.some(function(result,index){
 geoObject=geoObject.concat(result.GEOName);
 countryObject=countryObject.concat(result.Country);
 stateObject=stateObject.concat(result.State);
 cityObject=cityObject.concat(result.City);
 locationObject=locationObject.concat(result.Location);
})

     this.setState({
		 geoObjectFinal:geoObject,
		 countryObjectFinal:countryObject,
		 stateObjectFinal:stateObject,
		 cityObjectFinal:cityObject,
		 locationObjectFinal:locationObject
	 });
},

yesNoToggle:function(){
	this.setState({yesBtn:!this.state.yesBtn});
	},
	yesNoToggle2:function(){
	this.setState({yesBtn2:!this.state.yesBtn2});
	},
getByodObject:function(){
   var _this = this;
    axios.defaults.headers['uid'] =  "EURL038";
	axios.get(this.context.img_byod).
  then(function(result){
  _this.setState({
    ByodObject : result.data
    });
  }); 
},

getSoftwareObject:function(){
   var _this = this;
    axios.defaults.headers['uid'] =  "EURL037";
	axios.get(this.context.img_software).

  then(function(result){
  _this.setState({
    softwareObject : result.data
    });
  }); 
},

closeOverlay:function(){
		this.setState({addClass:true,overlayActive:false,activeBtn:true,});
	},

	clickCheck:function(index){
switch(index){
	case 1 :
	this.getHardwareObject();
	    
  break;

	case 2 :
	var _this = this;
	axios.defaults.headers['uid'] =  "EURL034";
	axios.get(this.context.img_telecom).
 	 then(function(result){
		  if(result.status == 200){
			  _this.setState({
   		 telecomObject : result.data
   				 });
		  }else{
			  _this.setState({
   		 telecomError : true
   				 });
		  } 	
 	 }); 

	axios.defaults.headers['uid'] =  "EURL035";
	axios.get(this.context.img_telecom_bridge).
  	then(function(result1){
		   if(result1.status == 200){
              _this.setState({
 	   BridgeObject : result1.data
   				 });
		   }else{
			   _this.setState({
 	   bridgeError : true
   				 });
		   } 	 
  	}); 
  	break;

  default : 
}
},

onSurrender:function(reqId,type){
	var _this = this;
  if(type == "telecom"){
             var obj = new Object();
  obj.requestId = reqId;

    axios.defaults.headers['uid'] =  "EURL035";
	axios.post(_this.context.img_telecom_sur,obj).
  	then(function(result){
		  if (result.data == "" || result.data == undefined) {
            	 _this.setState({
				  alertTxt: "Something went wrong.Kindly try after sometime.",
          		  showHighPop: true
   						 }); 
						return;
					 }else{
						 _this.setState({
						  alertTxt: result.data.MESSAGE,
          		 		 showHighPop: true
   				 		 }); 
					 }
  	          });
  }else if(type == "bridge"){
          axios.defaults.headers['uid'] =  "EURL035";
		  /*
		  {"retcode":0,"message":"All the bridges has been cancelled successfully."} 
		  {"retcode":-1,"message":"No record found for deactivation."}
		   */
	axios.get(_this.context.img_telecom_bridge_sur).
  	then(function(result){
		  if (result.data == "" || result.data == undefined) {
            	 _this.setState({
				  alertTxt: "Something went wrong.Kindly try after sometime.",
          		  showHighPop: true
   						 }); 
						return;
					 }else{
						 _this.setState({
						  alertTxt: result.data.message,
						  bridgeStat:true,
						  telSurRet: result.data.retcode,
          		 		  showHighPop: true
   				 		 }); 
					 }
  	          });
  }
	 
},

onTransfer:function(){
	window.open("http://webqa01.wipro.com/myrequestqa/myComm.html?reqType=MOBILE&pageType=MYCONNECTION", '_blank');
  
},
close:function(){
this.setState({ showHighPop: false});
},

viewAssets:function(){
   window.open(this.context.img_hardware_redirection, '_blank');
},

submitHandover:function(){
},

handleChange:function(type){  //deepika
	if(type == "geo"){
		
	}else if(type == "country"){
		
	}else if(type == "state"){
		
	}else if(type == "city"){
		
	}else if(type == "office"){
		
	}
	
},
   render: function() {
	  return (
	  	
	  	<div className="col-xs-12 no-padd">
		  	
		  		{this.state.overlayActive?<div className="over_ley" onClick={this.closeOverlay}></div>:<null />}
		  	 
		  <div className="col-xs-12 no-padd">
			  <Alertplugin showHighPop={this.state.showHighPop} alertTxt={this.state.alertTxt} close={this.close}/>
		  	<div className="col-xs-12 new_width">
			  
		                     	 <div className="col-xs-12 handover_heading  no-padd">IMG Clearance</div>
		                     	 	
									   <Tabs defaultActiveKey={1} className="sub_tabs col-xs-12 no-padd mt20" onSelect={this.clickCheck}>
								    <Tab eventKey={1} title="HARDWARE">
								    	{this.state.hwError || this.state.hwGeoError?<div><h3 className="col-xs-12 errPage1"> Error occurred. Kindly try after sometime.</h3></div>:<div className="col-xs-12 no-padd">
								    	    	{this.state.hardwareObject != ""?this.state.hardwareObject.map((hwObject,index)=>(
<div className="col-xs-12 mt20 brdr no-padd" key={index}>
		                     	 		<div className="col-xs-3 asssetName buy_content no-padd">
		                     	 		<div className="total_text col-xs-12">{hwObject.Asset_Name}</div>
		                     	 		<div className="col-xs-12 pl15 mt0 clr_black no-padd font12"><a href="#">{hwObject.Asset_Id}</a></div>
		                     	 			 
		                     	 		</div>
		                     	 		<div className="col-xs-2 buy_content no-padd">
		                     	 		<div className="col-xs-12">SIR number</div>
		                     	 		<div className="col-xs-12 pl15 mt0 clr_black no-padd font12">{hwObject.SIR_Number}</div>
		                     	 			 
		                     	 		</div>
		                     	 		<div className="col-xs-2 buy_content no-padd asssetStatus">
		                     	 		<div className="col-xs-12">SIR status</div>
		                     	 		<div className="col-xs-12 pl15 mt0 clr_black no-padd font12">{hwObject.SIR_Status}</div>
		                     	 			 
		                     	 		</div>
		                     	 		<div className="col-xs-2 buy_content no-padd">
		                     	 		<div className="col-xs-12">SIR comment</div>
		                     	 		<div className="col-xs-12 pl15 mt0 clr_black no-padd font12">{hwObject.SIR_Comments}</div>
		                     	 			 
		                     	 		</div>
		                     	 		
										  <div className="col-xs-2 buy_content no-padd">
		                     	 		<div className="col-xs-12">Amount</div>
		                     	 		<div className="col-xs-12 pl15 mt0 clr_black no-padd font12">{hwObject.Asset_Amount}</div>
		                     	 			 
		                     	 		</div>

		                     	 		<div className="col-xs-2 buy_content no-padd brdr-left">
		                     	 				<span className="col-xs-12 no-padd pending_img pending_reuse"></span>
		                     	 				<span className="col-xs-12 no-padd text_center">{hwObject.Asset_Status}</span>
		                     	 		</div>    
										                                  		                     	 		
		                     	 	</div>
									  
												)):<div className="noRecordsClass">No Records Available</div>}
												{this.state.hardwareObject != ""?
												<div>
														                     	 	  <div className="col-xs-12 no-padd mt20 mb20">
		                     	 	   <div class="col-xs-6 pagination">
         
          <ul className="leader_ul col-xs-12 no-padd">
          <li className="aa"> <button className="left_arrw" data-role="none" title="left arrow"></button></li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
           <li>4</li>
           <li>5</li>
           <li>6</li>
           <li>7</li>
            <li>8</li>
            <li>......</li>
            <li>100</li>
           <li>  <button className="right_arrw" data-role="none" title="left arrow"></button></li>
           </ul>
          
        </div>
		                     	 	  </div>
												<div className="col-xs-12 no-padd mt20 mb20 ">
		                     	 	
				            	<button data-role="none" className="clickhere_btn pull-right mrgn_ryt10 sub_wid" onClick={this.viewAssets}>VIEW ASSETS
				            	</button>		            		            	
				            	</div>  </div>:""}
									<div className="col-xs-12 no-padd mt10">
		                     	 	  	<div className="col-xs-12 no-padd mt10">
		                     	 	  	<span className="col-xs-8 no-padd mt6 note_text">I would like to avail the courier option to handover the asset.</span>
		                     	 	  	<span className="col-xs-4 no-padd">
		                     	 	  	<button data-role="none" className={this.state.yesBtn == true ? 'yes_btn' : 'yes_btn  active'} onClick={this.yesNoToggle}></button>
		                     	 	  	</span>
		                     	 	  	</div>
		                     	 	  {this.state.yesBtn?	<div className="table_align credit_table mt10">

			                     	 	  	<table className="saltab_head col-xs-12 mt10 no-padd brdr">
			                     	 	  	<thead>
			                     	 	  	<tr>
			                     	 	  	<th>Vendor name</th>
			                     	 	  	<th>Address</th>
			                     	 	  	<th>Tracking number</th>
			                     	 	  	<th>Recipients address</th>
			                     	 	  	</tr>
			                     	 	  	</thead>
			                     	 	  	<tbody>
			                     	 	  	<tr>
			                     	 	  	<td>Sekhar</td>
			                     	 	  	<td>Wipro</td>
			                     	 	  	<td><input type="text" placeholder="123"/></td>
			                     	 	  	<td><input type="text" placeholder="wipro" /></td>
			                     	 	  	</tr>
			                     	 	  	</tbody>
			                     	 	  	</table>
		                     	 	  	</div>:""}
				            		</div>
				            		<div className="col-xs-12 no-padd">
				            			<div className="col-xs-8 no-padd  note_text bank_details mt20">Asset handover location</div>
				            			<ul className="col-xs-12 asset_ul no-padd mt10">
				            				<li>
				            				<div className="col-xs-12 no-padd font12 mb10">GEO name</div>
				            				<div className="col-xs-12 no-padd">
				            				<span className="custom-dropdown custom-dropdown--red cabreq_drpdwn width_drp_asses">
				            				<select data-role="none" className="custom-dropdown__select custom-dropdown__select--red" id="ddlViewBy" onChange={this.handleChange.bind(this,"geo")}>
											<option>--select--</option>
				        				{this.state.geoObjectFinal != ""?this.state.geoObjectFinal.map((geoObj,index)=>{
                                                     <option>{geoObj}</option>
											}):""}			           				
				            				</select>
				            				</span>
				            				</div>
				            				</li>
				            				<li>
				            				<div className="col-xs-12 no-padd font12 mb10">Country</div>
				            				<div className="col-xs-12 no-padd">
				            				<span className="custom-dropdown custom-dropdown--red cabreq_drpdwn width_drp_asses">
				            				<select data-role="none" className="custom-dropdown__select custom-dropdown__select--red" id="ddlViewBy" onChange={this.handleChange.bind(this,"country")}>
											<option>--select--</option>
				            				{this.state.countryObject != ""?this.state.countryObject.map((countObj,index)=>{
                                                     <option>{countObj}</option>
											}):""}	
				            				</select>
				            				</span>
				            				</div>
				            				</li>
				            				<li>
				            				<div className="col-xs-12 no-padd font12 mb10">State</div>
				            				<div className="col-xs-12 no-padd">
				            				<span className="custom-dropdown custom-dropdown--red cabreq_drpdwn width_drp_asses">
				            				<select data-role="none" className="custom-dropdown__select custom-dropdown__select--red" id="ddlViewBy" onChange={this.handleChange.bind(this,"state")} >
											<option>--select--</option>
				            					{this.state.stateObject != ""?this.state.stateObject.map((statObj,index)=>{
                                                     <option>{statObj}</option>
											}):""}	  
				            				</select>
				            				</span>
				            				</div>
				            				</li>
				            				<li>
				            				<div className="col-xs-12 no-padd font12 mb10">City</div>
				            				<div className="col-xs-12 no-padd">
				            				<span className="custom-dropdown custom-dropdown--red cabreq_drpdwn width_drp_asses">
				            				<select data-role="none" className="custom-dropdown__select custom-dropdown__select--red" id="ddlViewBy" onChange={this.handleChange.bind(this,"city")}>
											<option>--select--</option>
				            				{this.state.cityObject != ""?this.state.cityObject.map((cityObj,index)=>{
                                                     <option>{cityObj}</option>
											}):""}	  
				            				</select>
				            				</span>
				            				</div>
				            				</li>
				            				<li>
				            				<div className="col-xs-12 no-padd font12 mb10">Office</div>
				            				<div className="col-xs-12 no-padd">
				            				<span className="custom-dropdown custom-dropdown--red cabreq_drpdwn width_drp_asses">
				            				<select data-role="none" className="custom-dropdown__select custom-dropdown__select--red" id="ddlViewBy" onChange={this.handleChange.bind(this,"office")}>
											<option>--select--</option>
				            				{this.state.OfficeObject != ""?this.state.OfficeObject.map((offcObj)=>{
                                                     <option>{offcObj}</option>
											}):""}	   
				            				</select>
				            				</span>
				            				</div>
				            				</li>
				            			</ul>
				            		</div>
				            		{this.state.geoObject != "" && this.state.countryObject !="" && this.state.stateObject != "" && this.state.cityObject != ""?<div className="table_align credit_table mt10">

			                     	 	  	<table className="saltab_head col-xs-12 mt10 no-padd brdr">
			                     	 	  	<thead>
			                     	 	  	<tr>
			                     	 	  	<th>SPOC name</th>
			                     	 	  	<th>Address to return the asset</th>
			                     	 	  	<th>VOIP no</th>
			                     	 	  	<th>Contact no</th>
			                     	 	  	<th>Email id</th>
			                     	 	  	</tr>
			                     	 	  	</thead>
			                     	 	  	<tbody>
			                     	 	  	<tr>
			                     	 	  	<td>Sekhar</td>
			                     	 	  	<td>Wipro</td>
			                     	 	  	<td>123</td>
			                     	 	  	<td>21324343</td>
			                     	 	  	<td>adc@wipro.com</td>
			                     	 	  	</tr>
			                     	 	  	</tbody>
			                     	 	  	</table>
		                     	 	  	</div>:""}
		                     	 	<div className="col-xs-12 no-padd note_text mt20">
				            	<span className="note_bold col-xs-12 no-padd mb10">Please note : </span> A request would be raised automatically on your LWD to disable the BYOD mapped to you from Wipro’s network. Once the BYOD are disabled, the no dues clearance would be automatically updated. 
				            	</div>			            	

				            		
				            		
		                     	 	 <div className="col-xs-12 no-padd mt20 mb20 ">
		                     	 	
				            	<button data-role="none" className="clickhere_btn pull-right mrgn_ryt10 sub_wid" onClick={this.submitHandover}>Submit
				            	</button>
									</div>		                     	 
								    	</div>}
								    </Tab>								  
								    <Tab eventKey={2} title="TELECOM">
								   
			{this.state.telecomObject != "" || this.state.BridgeObject != ""?
			<div>	            	
 {this.state.telecomError?<div><h3 className="error">Server Failed to Load Telecom data, Please try after sometime!</h3></div>:<div> {this.state.telecomObject != ""?this.state.telecomObject.map((data,index)=>(
  

	  <div className="col-xs-12" key={index}>
      <div className="table_align credit_table mt20">
								
				            	<div className="col-xs-12 date_head no-padd bank_details">{this.state.telecomObject[index].itemDesc}</div>
				            	<table className="saltab_head col-xs-12 mt10 no-padd brdr">
					            {this.state.telecomObject[index].itemID != "10005"?<thead>
						            	<tr>
						            	<th>Phone No.</th>
						            	<th>status</th>
						            	<th>Action</th>
						            	</tr>
					            	</thead>:<thead>
						            	<tr>
						            	<th>Phone No.</th>
										<th>status</th>
						            	<th>Serial No.</th>
										<th>Make model</th>
						            	<th>Action</th>
						            	</tr>
					            	</thead>}
					            	{this.state.telecomObject[index].itemID != "10005"?<tbody>
						            	<tr>
						            	<td>{this.state.telecomObject[index].itemDesc}</td>
						            	<td>{this.state.telecomObject[index].statusDesc}</td>
						            	<td>
						            	<button data-role="none" className={this.state.telecomObject[index].statusCode == "CPTAC"?"ack_btn":"displayNone"} disabled={!this.state.telecomObject[index].statusCode == "CPTAC"} onClick={this.onSurrender.bind(this,this.state.telecomObject[index].requestId,"telecom")}>SURRENDER </button>
										<button data-role="none" className="ack_btn transferBtn" onClick={this.onTransfer}>TRANSFER</button>
						            	
						            	</td>
						            	</tr>						            	
					            	</tbody>:<tbody><tr>
						            	<td>{this.state.telecomObject[index].itemDesc}</td>
						            	<td>{this.state.telecomObject[index].statusDesc}</td>
										<td>{this.state.telecomObject[index].serialNo}</td>
						            	<td>{this.state.telecomObject[index].makemodel}</td>
						            	<td>
						            	<button data-role="none" className={!this.state.telecomObject[index].statusCode == "CPTAC"?"ack_btn":"displayNone"} disabled={!this.state.telecomObject[index].statusCode == "CPTAC"} onClick={this.onSurrender.bind(this,this.state.telecomObject[index].requestId,"telecom")}>SURRENDER</button>
										<button data-role="none" className="ack_btn transferBtn" onClick={this.onTransfer}>TRANSFER</button>
						            	
						            	</td>
						            	</tr></tbody>}
				            	</table>
				            	</div>				            	
				            	   </div>
  
	   
  )):""}</div>}

          
  {this.state.BridgeObject != ""?<div className="table_align credit_table mt20 mb20">
				            	<div className="col-xs-12 date_head no-padd bank_details">Bridge number</div>
				            	<table className="saltab_head col-xs-12 mt10 no-padd brdr">
					            	<thead>
						            	<tr>
						            	<th>Corporate account</th>
						  				<th className="box_align">No dues status</th>
						  				
						            	<th>Action</th>
						            	</tr>
					            	</thead>
					            	<tbody>
						            	{this.state.BridgeObject.map((bridgeObj,index)=>(
                                         <tr key={index}>
						            	<td>{bridgeObj.requestId}</td>
						            	<td>{bridgeObj.status_stmt}</td>
						            	<td><button data-role="none" className={this.state.bridgeStat?"displayNone":"ack_btn"}  onClick={this.onSurrender.bind(this,bridgeObj.requestId,"bridge")}>SURRENDER</button></td>
						            	</tr>
										))}						            	
					            	</tbody>
				            	</table>
				            	</div>:""}
  </div>:<div className="noRecordsClass">No Records Available</div>}
						  </Tab>
								  </Tabs>
		                     	 	                     	 	 
		                     	 	

		                     </div>
				  
		  </div>
		 
		</div>
		
			
          )
    }
});

module.exports = IMGClearance;