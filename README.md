# parcel-swagger-ui
SwaggerUI built with Parcel

The latest `swagger-ui` working branch is [feat/swagger-ui-cjs-as-hooks](https://github.com/tim-lai/parcel-swagger-ui/tree/feat/swagger-ui-cjs-as-hooks)  

The latest `swagger-ui-react` working branch is [feat/swagger-ui-react-cjs](https://github.com/tim-lai/parcel-swagger-ui/tree/feat/swagger-ui-react-cjs)

The prior progressive branches contain a functioning SPA as well.  

This project references work from a related repo [here](https://github.com/char0n/parcel-swagger-ui/tree/main), which also contains working branches with detailed explanations for [Parcel + `swagger-ui-react`](https://github.com/char0n/parcel-swagger-ui/tree/swagger-ui-react), as well as [Parcel + `swagger-ui`](https://github.com/char0n/parcel-swagger-ui/tree/swagger-ui).  


# installation
`npm i`  
`npm start`  

# project progression
1. [feat/swagger-ui-cjs-as-globalThis](https://github.com/tim-lai/parcel-swagger-ui/tree/feat/swagger-ui-cjs-as-globalThis): creates `.parcelrc` for css transform exlusion, uses `swagger-ui/dist/swagger-ui-es-bundle` in place of true ESM fragment, and uses `initializer.js` to instantiate a SwaggerUI instance.  

2. [feat/swagger-ui-cjs-as-class](https://github.com/tim-lai/parcel-swagger-ui/tree/feat/swagger-ui-cjs-as-class): converts from a globalThis instance to a React class component, as well as setting up a Parcel alias for `swagger-ui` to use CommonJS bundle.  

3. [feat/swagger-ui-cjs-as-hooks](https://github.com/tim-lai/parcel-swagger-ui/tree/feat/swagger-ui-cjs-as-hooks): converts from class component to functional component.  

4. [feat/swagger-ui-react-cjs](https://github.com/tim-lai/parcel-swagger-ui/tree/feat/swagger-ui-react-cjs): uses `swagger-ui-react`, and removes unneeded `useEffect` and `globalThis` instance.  
