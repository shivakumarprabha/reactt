var React = require('react'); 
var ReactDOM = require('react-dom'); 

const MainComp = React.createClass({

  render:function()
  {
    return (
      <div>
      <div><h1>Welcome to sample React App</h1></div>
      <SecondComp> </SecondComp>
      </div>);
    }
  }
);
const SecondComp = React.createClass({

  getInitialState() {
    return {ServiceResponse:"Please wait ...."}
  },
  FetchData:function()
  {
    var http = new XMLHttpRequest();
    var url = "http://localhost:60308/api/home/" ;
    http.open("GET", url, true);
    http.onreadystatechange = () => {
      if(http.readyState == 4 && http.status == 200)
      {
        this.setState({ServiceResponse:http.response});

      }
    }
    http.send();
  },
  componentWillMount:function()
  {
    this.FetchData();
  },
  render:function()
  {
    return (
      <div><h3>{this.state.ServiceResponse}</h3></div>);
    }
  }
);

module.exports = MainComp;
