import React from 'react';
import ReactDOM from 'react-dom';

var UserdetailsSPOCRow = React.createClass({  
  
      render: function () {  
          return(  
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad valueBorder pading10 mt20">
                                <div className="spocName_div">
                                  <img src="images/prof_img.png" alt="profile image" className="imagDiv"/>
                                  <div className="details">
                                      <label className="pull-left topLabel col-xs-12">IMG spoc name</label>
                                      <span className="pull-left col-xs-12 mediumFont">{this.props.item.SPOCName}</span>
                                      <span className="pull-left col-xs-12 email_span">{this.props.item.EmailId}</span>
                                  </div>
                                </div>

                                <div className="contact_div">
                                 
                                  <label className="pull-left topLabel col-xs-12">Contact</label>
                                  
                                  <span className="pull-left col-xs-12 mediumFont">{this.props.item.ContactNo}</span>
                                </div>
                                <div className="spocName_div">
                                 
                                  <label className="pull-left topLabel col-xs-12">Asset return mode</label>
                                  
                                  <span className="pull-left col-xs-12 mediumFont">{this.props.item.AssetReturnMode}</span>
                                </div>
                                <div className="spocName_div">
                                 
                                  <label className="pull-left topLabel col-xs-12">Spoc details for courier label</label>
                                  
                                  <span className="pull-left col-xs-12 mediumFont">{this.props.item.CourierLabel}</span>
                                </div>
                                <div className="spocName_div">
                                 
                                  <label className="pull-left topLabel col-xs-12">Address to return asset</label>
                                  
                                  <span className="pull-left col-xs-12 mediumFont">{this.props.item.ReturnAddress}</span>
                                </div>
                            </div>
  
              );  
      }  
  });  
  
  var SPOCData = React.createClass({  
          
      getInitialState: function(){  
          
          return{  
              result:[]  
          }  
      },  
      componentWillMount: function(){  
  
          var xhr = new XMLHttpRequest();  
          xhr.open('get', 'http://localhost:60623/MasterDataServices.svc/GetSPOCAssetStoreLocation', true);  
          xhr.onload = function () {  
              var response = JSON.parse(xhr.responseText);  
              this.setState({ result: JSON.parse(response.GetAssetStoreLocationResult).Response });  
  
          }.bind(this);  
          xhr.send();  
      },  
      render: function(){  
          var rows = [];  
          this.state.result.forEach(function (item) {  
              rows.push(<UserdetailsSPOCRow item={item}/>);  
      });  
	   return (<div> 
          {rows}  
      </div>);  
  }  
      
  });  
 module.exports = SPOCData;  