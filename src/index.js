///////////////////////////////////////////////////////////////////////////////////////
//                                   React                                           //
///////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';

///////////////////////////////////////////////////////////////////////////////////////
//                                   Redux                                           //
///////////////////////////////////////////////////////////////////////////////////////
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import siteReducer from './lib/reducer'

///////////////////////////////////////////////////////////////////////////////////////
//                                  Material                                         //
///////////////////////////////////////////////////////////////////////////////////////
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

///////////////////////////////////////////////////////////////////////////////////////
//                                 Components                                        //
///////////////////////////////////////////////////////////////////////////////////////
import App from './components/application/application';


const store = createStore(siteReducer, {
    navigation: false,
    gameList: [],
    openGameLeaderboard: {}
}, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
))

const theme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#000000",
        },
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