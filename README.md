# gatsby-plugin-livehelperchat

Add [Livehelperchat](https://livehelperchat.com/) to your Gatsby site.
Based on [gatsby-plugin-crisp-chat](https://github.com/ryanditjia/gatsby-plugin-crisp-chat).

## Install

`npm install --save gatsby-plugin-livehelperchat`

## How to use

To integrate Livehelperchat to your Gatsby site, you need to have self hosted Livehelperchat or an account with Livehelperchat. [Sign up](https://livehelperchat.com/order/now).

Once you sign up, you will be prompted with ways you can integrate Livehelperchat to your site. Click the HTML option and copy your `LIVEHELPERCHAT_URL`. 

> If you aren’t new to Livehelperchat, you can get your `LIVEHELPERCHAT_URL` by going to Website Settings > Integrations > HTML.

Upon obtaining your `LIVEHELPERCHAT_URL`, you need to modify your `gatsby-config.js` as follows:

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-liveheperchat',
      options: {
        baseUrl: 'YOUR_LIVEHELPERCHAT_URL',
        enableDuringDevelop: false, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Livehelperchat loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
        widgetSize: [],
        popupSize: [],
        preferredScheme: 'https', //Optional
        domain: [], //Optional, Defaults to empty.
        departments: [], //Optional. Defaults to all departments.
        operators: [], //Optional. Defaults to empty
      },
    }
    'your',
    'other',
    'plugins',
  ],
}
```

Restart your Gatsby server for the plugin to take effect.

If you have improvements that you’d like to see, or encounter any bugs, feel free to [create an issue](https://github.com/sengsara/gatsby-plugin-livehelperchat/issues)!

## Changelog

See [CHANGELOG.md](CHANGELOG.md)
