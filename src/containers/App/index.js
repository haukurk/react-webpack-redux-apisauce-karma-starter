import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactSpinner from 'react-spinjs';

/* global styles for app */
import './styles/app.scss';

/* application components */
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

/**
 * Decorator to access redux states and utils.
 */
@connect(
    state => ({
        system: state.system,
    })
)

export class App extends Component {

    const { system } = this.props;

    static propTypes = {
        children: React.PropTypes.any,
    };

    render() {
        if(!system.rehydrated) {
            return <ReactSpinner/>;
        }
        return (
            <div>
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
}
