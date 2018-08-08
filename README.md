# Sample App

## Description
This is a simple website that takes in input on a page and display input history on another page.<br />
It is based on <a href="https://github.com/react-boilerplate/react-boilerplate">a boiler plate</a> <br/>
<br/>
some technologies it leverages:
- React Router
- Redux
- Redux Saga
- Reselect
- Reselect
- Styled Components
- Jest / Enzymes
- ImmutableJs
- React Helmet
- React Loadable
- React Intl
- NodeJs / ExpressJs
- MongoDB / Mongoose

## Development Usage
1. prepare a local mongoDB environment by installing mongoDB and run `mongod` locally
2. clone this repo
3. run `npm start` at project root directory

## Outcome Highlights
- Wrote styled components that depends on the current url location (NavLink in Header)
- Full tests for InputPage Container and ChangeInputPage Container

## Extendability
- Web page meta info can be refined for SEO
- More tests should be written to cover at least 98% of code base
- Loading and error page can be refined with usage of react-loadable
- Translation to other languages can be provided using react-intl
- Other unused technologies can be removed using the links from the boiler plate

## Challenges and Decisions
1. The boiler plate uses a lot of technologies whether or not it makes sense to incorporate into a simple website like this one. The way it setup the redux / redux-saga is uncommon to me if not unseen. I did not remove most of the technologies setup in the boiler plate since they are intertwined deeply with webpack and redux. Spent most of time understanding the data flow with in the template, I proceeded with the setup.

2. Combined ChangeInputPage's and InputHistoryPage's reducers and sagas to a abstract level InputPage container. Although the boiler plate code is opinionated in its one-reducer-to-one-container setup (reflected in its utils/checkStore.js), it makes more sense to unify the two reducers to one that's solely related to input while separating the two presentational components. Another option can be to create a higher level container that presents either of the pages based on matched routes, but that requires more effort in testing the higher level container.