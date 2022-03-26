# Getting Started with Photo search web applicaton 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install dependencies

### `npm install`

## Replace the Pexel API key in `src/utils/http.ts`
```js
const PEXEL_API = '<PEXEL_API_KEY>';
```

## Crendencial Management

1. Install HashiCorp Vault on a server.

2. Enable kv Secrets Engine.

   ```bash
   vault secrets enable -path=pexel-secrets-kv kv 
   ```

3. Write a secret to the `pexel-secrets-kv` path:

   ```bash
   vault kv put pexel-secrets-kv/Pexel PexelKey=<PexelKeyValue>
   ```

4. Create a policy file `Pexel.hcl`.

   ```hcl
   path "pexel-secrets-kv/Pexel"{
       capabilities = ["read"]
   }
   ```

5. Write a policy:

   ```bash
   vault policy write Pexel Pexel.hcl
   ```

6. Create token and assign the newly created policy:

   ```bash
   vault token create -policy=Pexel -format=json | jq
   ```

   Copy the client token into a text editor.

7. Get the Pexel key.

   ```bash
   curl -H "Authorization: Bearer <TOKEN>" http://<DOMAIN>/v1/pexel-secrets-kv/Pexel | jq
   ```

(I do not have the resource to put a server on fleet, so I just hard code it currently.)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn HashiCorp Vault, checkout https://www.hashicorp.com/products/vault
