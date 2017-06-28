/**
 * Created by pankratov on 6/23/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../SignUpComponent';

class SignUpContainer extends React.Component {



    /**
     * Render the component.
     */
    render() {
        return (
            <SignUpForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }
}


SignUpContainer.contextTypes = {
    router: PropTypes.object.isRequired
};

export default SignUpContainer;