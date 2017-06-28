/**
 * Created by pankratov on 6/23/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUpForm = () => (
    <Card className="container">
        {/*<form action="/" onSubmit={onSubmit}>*/}
        <form action="/" >
            <h2 className="card-heading">Sign Up</h2>

            <div className="field-line">
                <TextField
                    floatingLabelText="Name"
                    name="name"
                    // errorText={errors.name}
                    // onChange={onChange}
                    // value={user.name}
                />
            </div>

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
                <RaisedButton type="submit" label="Create New Account" primary />
            </div>

            <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
        </form>
    </Card>
);

export default SignUpForm;

