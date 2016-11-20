import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactSpinner from 'react-spinjs';

/* global styles for app */
import './styles/app.scss';
// Semantic UI
import '../../../semantic/dist/semantic.css';

/**
 * Decorator to access redux states and utils.
 */
@connect(
    state => ({
        system: state.system,
    })
)

export class App extends Component {

    /**
     * [constructor of LoginForm]
     * @param  {object} props passed to the Component
     */
    constructor(props) {
        super(props);
    }

    static propTypes = {
        children: React.PropTypes.any,
    };

    render() {

        const { system } = this.props;

        if(!system.rehydrated) {
            return <ReactSpinner/>;
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
