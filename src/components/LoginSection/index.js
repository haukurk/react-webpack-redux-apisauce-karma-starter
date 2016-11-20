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
            <LoginForm {...this.props} />
        );
    }
}
