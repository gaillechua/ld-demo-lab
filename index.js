var LaunchDarkly = require('launchdarkly-node-server-sdk');

// Replace SDK-KEY with the provided SDK Key
var ldclient = LaunchDarkly.init('SDK-KEY');

var user = {
  firstName: 'Bob',
  lastName: 'Loblaw',
  key: 'unique_id',
  custom: {
    // groups: 'beta_testers'
  }
};

ldclient.once('ready', function() {
  ldclient.variation('first-feature', user, false, function(err, showFeature) {
    console.log("SDK successfully connected! The value of first-feature is " + showFeature + " for " + user.key)
    // Close the LaunchDarkly SDK, after ensuring that analytics events have been delivered.

    // IMPORTANT: in a real application, you would only call close() when the application is
    // about to quit-- NOT after every call to variation(). The reason that this step is
    // inside the variation handler is that we want it to happen after the SDK has been
    // initialized and after the flag has been evaluated. Node.js will not allow the
    // application to exit as long as the SDK is still running.
    ldclient.flush(function() {
      ldclient.close();
    });
  });
});