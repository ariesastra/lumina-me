# Frontend

Displaying Crypto data.

This is all I can deliver with 4 Hour, I'm trying using
Redux and create component base React App, you can see
my `src` folder, there are `action folder`, `constant folder`
, and `reducer folder` for Redux purpose, and inside
`components folder` there are all component for displaying
single Hompage route.

Inside `component` folder, I'm create 2 folder called
`layout` for put `global component`, so that global
component will be call in every page, and the other
folder is `homepageSection`, that folder is for all
homepage section component.

## Redux Concept

For displaying data, I tried to use redux state
management, this is my concept.

#### Creating Store

For Redux Store, im using this stack.

- [Redux](https://redux.js.org/)
- [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
- [Redux DevTools Extension](https://www.npmjs.com/package/redux-devtools-extension)

Inside this store, I'm pushing data to store into
global state called criptoList.

#### Creating Constant

In constat, im creating 3 kind of data fetching,

```bash
CRYPTO_LIST_REQUEST
CRYPTO_LIST_SUCCESS
CRYPTO_LIST_FAIL
```

with those 3 type of data fetching will represent
an action in `action` folder.

#### Reducer & Action

After creating `Constant`, I'm creating folder called
`reducer`, inside that will be have a framework of
global state that will be call listCrypto in store.
and then I'm creating last folder for Redux called
`action` which is will do some action when we call
that state from Redux.

## Tech Stack

- [Axios](https://www.npmjs.com/package/axios)
- [Bootstrap](https://www.npmjs.com/package/bootstrap)
- [React Bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [React Data Table](https://www.npmjs.com/package/react-data-table-component)
- [Redux](https://www.npmjs.com/package/redux)
- [React Redux](https://www.npmjs.com/package/react-redux)
- [Redux Devtools Extension](https://www.npmjs.com/package/redux-devtools-extension)
- [Redux Thunx](https://www.npmjs.com/package/redux-thunk)
- [Styled Components](https://styled-components.com/docs/basics#installation)

## Installation

To use this project, you can do this step.

- Go to my github

```bash
https://github.com/ariesastra/lumina-me
```

- Clone it using

```bash
git clone https://github.com/ariesastra/lumina-me.git
```

- Move to Directory

```bash
cd lumina-me
```

- Install Dependencies

```bash
npm install
```

- run node command with

```bash
npm start
```

- Open this url to see website

```bash
localhost:3000
```
