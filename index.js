var LaunchDarkly = require('launchdarkly-node-server-sdk');

// Replace SDK-KEY with the provided SDK Key
var ldclient = LaunchDarkly.init('SDK-KEY');


// Context that LD pulls for targeting purposes
var user = {
  firstName: 'Bob',
  lastName: 'Loblaw',
  key: 'user_1234',
  custom: {
    // groups: 'beta_testers'
  }
};

ldclient.once('ready', function() {
  ldclient.variation('first-feature', user, false, function(err, showFeature) {
    // Displays a message in your Terminal if the first-feature value has been evaluated to true or false
    console.log("SDK successfully connected! The value of first-feature is " + showFeature + " for " + user.key)
    ldclient.flush(function() {
      ldclient.close();
    });
  });
});