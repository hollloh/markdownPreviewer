To run this app locally with [create-react-app](https://github.com/facebook/create-react-app) overwrite the files in your `create-react-app` directory with the files located in this repository.

<br />

package.json has [one added dependency](https://www.npmjs.com/package/marked) so you can either run:

```console
npm update
```

or manually add [marked](https://www.npmjs.com/package/marked).

<br />

package.json is also configured to be hosted on github with the added properties:
```json
"homepage": "https://YOURGITHUBUSERNAME.github.io/YOURREPOSITORYNAME",
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
```
They are currently commented out.

-- _[Other options](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment) you might prefer._

<br />

If you're simply [adding react to html](https://reactjs.org/docs/add-react-to-a-website.html) the `source code` is `App.js` and `App.css`.
