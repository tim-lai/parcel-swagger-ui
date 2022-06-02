# parcel-swagger-ui
SwaggerUI built with Parcel

# installation
`npm i`  
`npm start`  

# JS
We define a Parcel alias for `swagger-ui` to use the CommonJS bundle instead of the modern ESM distribution fragment. The CommonJS bundle includes production dependencies.

Additional details can be found in a related repo [here](https://github.com/char0n/parcel-swagger-ui/tree/swagger-ui)

# CSS

`swagger-ui.css` contains single character that Parcel just don't like. In `.parcelrc`, we have to disable `@parcel/transformer-css` transformer to build successfully.

Additional details can be found in a related repo [here](https://github.com/char0n/parcel-swagger-ui/tree/swagger-ui)

