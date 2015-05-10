/** raisedButton.jsx */

var React = require('react'),
  mui = require('material-ui'),
  RaisedButton = mui.RaisedButton;

module.exports = React.createClass({

  render: function() {
    return (
      <RaisedButton label="First section button" primary={true} />
    );
  }

});
