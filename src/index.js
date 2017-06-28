import React from 'react';
import ReactDOM from 'react-dom';

// Material-UI stuff
// -- This helps with tapping vs clicking and is REQUIRED for material-ui to work
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './Components/MuiThemeWrapper'
import registerServiceWorker from './Components/registerServiceWorker';
import './css/App.css';


injectTapEventPlugin();
ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
registerServiceWorker();
