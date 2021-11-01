# LaunchDarkly Server-Side Node.js Application Example

Here is a simple Node.js application that leverages LaunchDarkly's Server-Side SDK, and highlights LaunchDarkly's feature flagging with targeting by logging a different response depending on the property that is targeted


## Run the application locally

1. Install the LaunchDarkly Node.js SDK by running `npm install`
2. Edit `index.js` and set the value of `SDK-KEY` on ln. 4. This should have been provided to you already.
3. To test the Targeting rules, under `index.js`, uncomment line 11 `groups: 'beta_testers'`
4. In your terminal, run `node index.js`


## Expected Results of targeted feature flagging

* If `groups: 'beta_testers'` was uncommented prior to running the app, you should see the message `The value of first-feature is true for unique_id`
* If `groups: 'beta_testers'` was commented out prior to running the app, you should see the message `The value of first-feature is false for unique_id`