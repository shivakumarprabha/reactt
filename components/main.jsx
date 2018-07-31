var React = require('react');
var ReactDOM = require('react-dom'); 
var List = require('./Components/List.jsx'); 
var MainComp = require('./Components/ServiceCall.jsx'); 

ReactDOM.render(<List/>,document.getElementById('ingredients'));
ReactDOM.render(<MainComp/>, document.getElementById('MainApp'));