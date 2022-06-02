# parcel-swagger-ui
SwaggerUI built with Parcel

# installation
`npm i`  
`npm start`  

# JS
We define a Parcel alias for `swagger-ui` to use the CommonJS bundle instead of the modern ESM distribution fragment. The CommonJS bundle includes production dependencies.

For SwaggerUI-React, it is required to have matching versions of `swagger-ui` and `swagger-ui-react` installed as dependencies, as well as setting a Parcel alias.

Additional details can be found in a related repo [here](https://github.com/char0n/parcel-swagger-ui/tree/swagger-ui-react)

# CSS

`swagger-ui.css` contains single character that Parcel just don't like. In `.parcelrc`, we have to disable `@parcel/transformer-css` transformer to build successfully.

Additional details can be found in a related repo [here](https://github.com/char0n/parcel-swagger-ui/tree/swagger-ui)

