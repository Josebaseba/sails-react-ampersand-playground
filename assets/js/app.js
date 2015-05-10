var app = require('ampersand-app');

app.extend({
  init: function(){
    console.log(this, 'INIT!');
  }
});

app.init();
