var React = require('react'); 
var ListItem = require('./ListItem.jsx');

var ingredients =[{"id":1,"text":"ham"},{"id":2,"text":"ham2"},{"id":3,"text":"ham3"}];

var List = React.createClass({
	render: function(){
		var listIteams = ingredients.map(function(item){
			return <ListItem key={item.id} ingredient={item.text} />;
		});	
		return(<ul>{listIteams}</ul>);
	}
});
module.exports = List;