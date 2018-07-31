import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination.jsx';

var GridPager = React.createClass({
        render : function(){
            var li = [];
            var pageCount = this.props.Size;
            for(var i = 1; i <=pageCount; i++){
                if(this.props.currentPage == i){
                    li.push(<li key={i} className="active"><a href="#">{i}</a></li>);
                }
                else{
                    li.push(<li key={i} ><a href="#" onClick={this.props.onPageChanged.bind(null,i)}>{i}</a></li>);
                }
            }
            return (<ul className="pagination">{li}</ul>);
        }
    });


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
  
  var SPOCDataWithPage = React.createClass({  
          
      getInitialState: function(){  
          return {
                result : {
                    Response : [],
                    totalPage : 0,
                    sortColumnName : null,
                    sortOrder : null,
                    currentPage : 1,
                    pageSize : 3
                }
				
            };
			this.onChangePage = this.onChangePage.bind(this);
      },  
      componentDidMount: function(){  
			this.populateData();
      },  
	  populateData: function(){
		  
			var params = {
                pageSize : this.state.result.pageSize,
                currentPage : this.state.result.currentPage
            }

		  var xhr = new XMLHttpRequest();  
          xhr.open('get', 'http://localhost:60623/MasterDataServices.svc/GetSPOCAssetStoreLocation', true);  
          xhr.onload = function () {  
              var response = JSON.parse(xhr.responseText); 
                    if(this.isMounted()){
                        this.setState({
                            result : JSON.parse(response.GetAssetStoreLocationResult)
                        });
                    }
  
          }.bind(this);  
          xhr.send(); 
		 
	  },
	   onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
	 },
	  pageChanged:function(pageNumber,e){
            e.preventDefault();
            this.state.result.currentPage = pageNumber;
            this.populateData();
      },
      render: function(){  
          var rows = [];  
		  var j=0;
          this.state.result.Response.forEach(function (item) {  
			  j=j+1;
              rows.push(<UserdetailsSPOCRow key={j} item={item}/>);  
      });  
	   return (<div> 
          {rows}  
		  <Pagination />
      </div>);  
  }  
      
  });  

module.exports = SPOCDataWithPage;  