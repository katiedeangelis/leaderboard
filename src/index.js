import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/application';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import siteReducer from './lib/reducer'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const store = createStore(siteReducer, {
    gameList: [],
    openGameLeaderboard: {}
}, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
))

const theme = createMuiTheme({
    palette: {
        type: "light",
    },
    typography: { useNextVariants: true },
  });

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA