import React, { Component } from 'react';

import {styles} from  './styles.scss';

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
            <div className={`${styles}`}>
            <div className="ui inverted vertical footer segment">
                <div className="ui center aligned container">
                <div className="ui stackable inverted divided grid">
                    <div className="six wide column">
                    <h4 className="ui inverted header">Wide Group</h4>
                    <div className="ui inverted link list">
                        <a href="#" className="item">Link One</a>
                        <a href="#" className="item">Link Two</a>
                        <a href="#" className="item">Link Three</a>
                        <a href="#" className="item">Link Four</a>
                    </div>
                    </div>
                    <div className="three wide column">
                    <h4 className="ui inverted header">Narrow Group</h4>
                    <div className="ui inverted link list">
                        <a href="#" className="item">Link One</a>
                        <a href="#" className="item">Link Two</a>
                        <a href="#" className="item">Link Three</a>
                        <a href="#" className="item">Link Four</a>
                    </div>
                    </div>
                    <div className="seven wide column">
                    <h4 className="ui inverted header">Starter Footer - Header</h4>
                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                    </div>
                </div>
                <div className="ui inverted section divider"></div>
            
                <div className="ui horizontal inverted small divided link list">
                    <a className="item" href="#">Site Map</a>
                    <a className="item" href="#">Contact Us</a>
                    <a className="item" href="#">Terms and Conditions</a>
                    <a className="item" href="#">Privacy Policy</a>
                </div>
                </div>
            </div>
            </div>
        );
    }
}
