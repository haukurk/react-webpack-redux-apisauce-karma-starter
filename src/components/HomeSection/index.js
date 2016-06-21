import React, { Component } from 'react';
import { styles } from './styles.scss';

/**
 * Home Section
 */
export class HomeSection extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * Main Render Function
     * @return Home page section.
     */
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2>Home Page</h2>
                </div>
            </div>
        );
    }
}
