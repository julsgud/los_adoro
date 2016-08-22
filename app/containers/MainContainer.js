var React = require('react');
var styles = require('../styles');

function MainContainer(props) {
	return (
		<div className="col-sm-12" style={styles.transparentBg, styles.noPadding}>
			{props.children}
		</div>
	)
}

module.exports = MainContainer;