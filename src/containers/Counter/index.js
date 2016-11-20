import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

/* components */
import { CounterSection } from 'components/CounterSection';

/* action creators */
import * as CounterActions from 'actions/counter';
import * as LoginActions from 'actions/authentication';


/**
 * Meta data for the Counter Route.
 * @type {Object}
 */
const metaData = {
    title: 'Yet another Samskip app - Counter',
    description: 'Counter page for the yet another Samskip app.',
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
        counter: state.counter,
        authentication: state.authentication
    }),
    dispatch => bindActionCreators(Object.assign({}, CounterActions, LoginActions), dispatch)
)

/**
 *  Container for Counter Route.
 */
export class CounterContainer extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * Main render function for Counter Container.
     * @return Counter Container
     */
    render() {
        return (
            <div>
                <DocumentMeta {...metaData} />
                <CounterSection {...this.props} />
            </div>
        );
    }
}
