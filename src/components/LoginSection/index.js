import React, { Component } from 'react';
import { styles } from './styles.scss';

import LoginForm from '../LoginForm';

/**
 * Login Section
 */
export class LoginSection extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * Main rending function of Login Section
     * @return Login Section
     */
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2>Login Page</h2>
                </div>
                <LoginForm {...this.props} />
            </div>
        );
    }
}
