import React, { Component, PropTypes } from 'react';

/**
 * Counter Component
 */
class Counter extends Component {

    /**
     * Function for rending controls to increment and decrement the counter.
     * @return Group of controls to increment and decrement a counter in redux state.
     */
    renderControls() {

        // Extract from props
        const { increment, incrementIfOdd, incrementAsync, decrement, counter, authentication } = this.props;

        // Don't show controls if not authenticated. - This is of course not secure but more to just demonstrate.
        if(authentication.authenticated === true) {
            return (<div className="btn-group">
                <button className="btn btn-default" onClick={increment}>+</button>
                <button className="btn btn-default" onClick={decrement}>-</button>
                <button className="btn btn-default" onClick={incrementIfOdd}>Increment if odd</button>
                <button className="btn btn-default" onClick={() => incrementAsync()}>Increment async</button>
            </div>);
        } else {
            return <p>Please login to increase or decrease the counter.</p>;
        }
    }

    /**
     * Main render function for Counter Component
     * @return Counter Component
     */
    render() {

        // Extract counter from redux state.
        const { counter } = this.props;

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <p>Clicked: <span className="badge">{counter}</span> times</p>
                    {this.renderControls()}
                </div>
            </div>
        );
    }
}

// Validation
Counter.propTypes = {
    increment     : PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement     : PropTypes.func.isRequired,
    counter       : PropTypes.number.isRequired
};

export default Counter;
