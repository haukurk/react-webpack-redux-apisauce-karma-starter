import React, { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react'

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
        if(authentication.isAuthenticated === true) {

            return (<Button.Group>
                     <Button onClick={increment}>+</Button>
                     <Button onClick={decrement}>-</Button>
                     <Button onClick={incrementIfOdd}>Increment if odd</Button>
                     <Button onClick={() => incrementAsync()}>Increment async</Button>
                   </Button.Group>);
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
            <div className="ui text container">
                    <p>Clicked: <span className="badge">{counter}</span> times</p>
                    {this.renderControls()}
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
