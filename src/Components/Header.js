/**
 * Created by pankratov on 6/23/17.
 */
// import React from 'react';
// import { NavLink } from 'react-router-dom';
//
// // MUI stuff
// import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
//
// const Header = () => (
//     <AppBar className="main-nav"
//         //Redo as a onTitleTouchTap opt of AppBar when the time comes
//         onTitleTouchTap={<NavLink to="/"/>}
//         title="Drive Thru Coding"
//         iconElementRight={
//             <div className="login-signup-btn-group">
//                 <RaisedButton label="Login" containerElement={ <NavLink to="/login" /> } />
//                 <RaisedButton label="Sign Up" containerElement={ <NavLink to="/signup" /> }/>
//             </div>
//         }
//     />
// );
//
//
// export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton'


const Header = () => (
    <div className="top-bar main-nav">
        <div className="top-bar-left">
            <NavLink exact to="/">Drive Thru Coding</NavLink>
        </div>

        <div className="top-bar-right">
            <RaisedButton className="top-menu-btn" label="Login" containerElement={ <NavLink to="/login" /> } />
            <RaisedButton className="top-menu-btn" label="Sign Up" containerElement={ <NavLink to="/signup" /> }/>
            {/*<NavLink to="/login">Log in</NavLink>*/}
            {/*<NavLink to="/signup">Sign up</NavLink>*/}
        </div>

    </div>
);

export default Header;