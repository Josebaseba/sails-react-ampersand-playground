var app = require('ampersand-app');

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo: https://github.com/zilverline/react-tap-event-plugin

var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

var firstSection = require('./views/firstSection');

app.extend({

  init: function(){
    console.log(this, 'INIT!');
    app.trigger('printFirstSection');
  }

});

app.init();
