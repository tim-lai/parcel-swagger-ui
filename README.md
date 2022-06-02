# parcel-swagger-ui
SwaggerUI built with Parcel

# installation
`npm i`  
`npm start`  

# JS
`swagger-ui-es-bundle.js` is commonjs2 build that does include production dependencies. This is a temporary workaround.

# CSS

`swagger-ui.css` contains single character that Parcel just don't like. In `.parcelrc`, we have to disable `@parcel/transformer-css` transformer to build successfully.

