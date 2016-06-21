import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import { LoginSection } from 'components/LoginSection';
import * as LoginActions from 'actions/authentication';

/**
 * Meta data for the Login Route.
 * @type {Object}
 */
const metaData = {
    title: 'Yet another Samskip app - Login',
    description: 'Login page for the yet another Samskip app.',
    canonical: '',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
};

/**
 * Decorator to access redux states and utils.
 */
@connect(
    state => ({
        authentication: state.authentication
    }),
    dispatch => bindActionCreators(LoginActions, dispatch)
)

/**
 * Container for Login Route.
 */
export class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DocumentMeta {...metaData} />
                <LoginSection {...this.props} />
            </div>
        );
    }
}
