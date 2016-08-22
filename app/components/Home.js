var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var MainContainer = require('../containers/MainContainer');

var Home = React.createClass({
	render: function() {
		return(
			<MainContainer>
				<h1> Los Adoro </h1>
				<h2> Digital Content </h2>
			</MainContainer>
		)
	}
});

module.exports = Home;