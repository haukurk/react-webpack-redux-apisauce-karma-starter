import React, { Component } from 'react';
import { Link } from 'react-router';

import { styles } from './styles.scss';

/**
 * General Header Component
 */
export class Header extends Component {

    /**
     * Main render function for the Header
     * @return Header
     */
    render() {
        // TODO: Generate Navigation Bar more dynamically.
        return (
            <nav className={`${styles} navbar navbar-inverse navbar-fixed-top`}>
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="">Yet Another Samskip App</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/" activeClassName="active" onlyActiveOnIndex>Home</Link>
                            </li>
                            <li>
                                <Link to="/counter" activeClassName="active">Counter</Link>
                            </li>
                            <li>
                                <Link to="/login" activeClassName="active">Auth</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
