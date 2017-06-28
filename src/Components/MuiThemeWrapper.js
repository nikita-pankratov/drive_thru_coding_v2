/**
 * Created by pankratov on 6/23/17.
 */
import React from 'react';

// Important Material UI stuff
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from "./App";

const Main = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <App />
    </MuiThemeProvider>
);

export default Main;
