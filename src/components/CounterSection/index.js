import React, { Component } from 'react';
import { styles } from './styles.scss';
import Counter from 'components/Counter';
/* application components */
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

/**
 * Component that represents the Section that contains counter
 */
export class CounterSection extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * Main function for Counter Section.
     * @return Counter Section
     */
    render() {

        let { isAuthenticated } = this.props.authentication;

        return (
            <div>
             <Header isAuthenticated={isAuthenticated} />
            <div className="ui text container">
                <Counter {...this.props} />
            </div>
            <Footer />
            </div>
        );
    }
}
