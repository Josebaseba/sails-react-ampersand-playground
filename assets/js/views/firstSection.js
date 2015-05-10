/** firstSection.jsx */

var React = require('react'),
    app = require('ampersand-app'),
    RaisedButton = require('../components/RaisedButton.jsx');

var printFirstSection = function(){
  React.render(<RaisedButton />, document.getElementById('first'));
};

app.once('printFirstSection', printFirstSection);
