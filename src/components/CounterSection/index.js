import React, { Component } from 'react';

import { styles } from './styles.scss';
import Counter from 'components/Counter';

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
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2>Counter Page</h2>
                </div>
                <div className="page-header">
                    <h2>Counter Example</h2>
                </div>
                <Counter {...this.props} />
            </div>
        );
    }
}
