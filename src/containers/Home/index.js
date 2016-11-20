import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from 'actions/authentication';
/* components */
import { HomeSection } from 'components/HomeSection';


/**
 * Meta data for the Home Route.
 * @type {Object}
 */
const metaData = {
    title: 'Yet another Samskip app - Home',
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
 * Container for Home Route.
 */
export class HomeContainer extends Component {

    /**
     * Main render function for the Home Container Route
     * @return Container for Home Route
     */
    render() {
        return (
            <div>
                <DocumentMeta {...metaData} />
                <HomeSection {...this.props} />
            </div>
        );
    }
}
