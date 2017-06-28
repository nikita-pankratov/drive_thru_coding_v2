/**
 * Created by pankratov on 6/23/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const LoginForm = () => (
    <Card className="container">
        {/*<form action="/" onSubmit={onSubmit}>*/}
        <form action="/" >
            <h2 className="card-heading">Login</h2>

            <div className="field-line">
                <TextField
                    floatingLabelText="Email"
                    name="email"
                    // errorText={errors.email}
                    // onChange={onChange}
                    // value={user.email}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Password"
                    type="password"
                    name="password"
                    // onChange={onChange}
                    // errorText={errors.password}
                    // value={user.password}
                />
            </div>

            <div className="button-line">
                <RaisedButton type="submit" label="Log in" primary />
            </div>

            <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
        </form>
    </Card>
);

export default LoginForm;