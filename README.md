# LaunchDarkly Server-Side Node.js Application Example

Here is a simple Node.js application that leverages LaunchDarkly's Server-Side SDK, and highlights LaunchDarkly's feature flagging with targeting by logging a different response depending on the property that is targeted

## Initial setup in your LaunchDarkly Project 
*Prerequisite: Must have a LaunchDarkly account to proceed.*

1. Under the `Feature Flags` menu item, create a new flag called `gailles-first-feature`. Make sure that the `key` and `name` are set to that value. 
2. In the same panel under `Client-side SDK availability` check `SDKs using Client-side ID`. Click `Save Flag`.
3. From the `Targeting` settings for your new `gailles-first-feature` flag, toggle `Targeting` to `ON`. 
4. Under `Target users who match these rules`, add a new rule named `Gmail Email Addresses` with the following parameters: `email ends with gmail.com` and `SERVE true`.
5. Under `Default Rule`, make sure it is set to `SERVE false`. Click `Save Changes` and confirm by adding your comment.
6. Navigate back to the main `Feature Flags` panel list and make sure `gailles-first-feature` is toggled on.


## Run the application locally

1. Install the LaunchDarkly Node.js SDK by running `npm install`
2. Edit `index.js` and set the value of `SDK-KEY` on ln. 4. This should have been provided to you already.
3. To test the Targeting rules, under `index.js`, uncomment line 11 `groups: 'beta_testers'`
4. In your terminal, run `node index.js`


## Expected Results of targeted feature flagging

* If `groups: 'beta_testers'` was uncommented prior to running the app, you should see the message `The value of first-feature is true for unique_id`
* If `groups: 'beta_testers'` was commented out prior to running the app, you should see the message `The value of first-feature is false for unique_id`