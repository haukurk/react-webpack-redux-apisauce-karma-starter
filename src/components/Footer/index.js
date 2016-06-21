import React, { Component } from 'react';

import './styles.scss';

/**
 * General Footer Component
 */
export class Footer extends Component {

    /**
     * Main render function for Footer
     * @return Footer
     */
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <p className="text-muted">&copy; 2016 Samskip</p>
                    </div>
                </div>
            </footer>
        );
    }
}
