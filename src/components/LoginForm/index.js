import React, { Component, PropTypes } from 'react';

import { styles } from './styles.scss';
import { push } from 'react-router-redux';

import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

class LoginForm extends Component {

    /**
     * [constructor of LoginForm]
     * @param  {object} props passed to the Component
     */
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    /**
     * Handles submit of the component form.
     * @param  {[type]} e is the event object
     */
    _onSubmit(e) {

        // Extract from props
        const { loginWithAPI } = this.props;

        // Extract from component state
        const { userName, password } = this.state;

        e.preventDefault();
        if(!userName.trim() || !password.trim()) {
            console.log("Empty user or pass.");
            return;
        }
        loginWithAPI(userName, password, 1000); // 1000 is subsys for Samskip.
        
    }

    /**
     * Render the login form.
     * @return Form Part of Login Section
     */
    renderForm() {

        // Extract from props
        const {
            authentication,
            transitionTo,
            loginWithAPI,
            forgetLogin } = this.props;

        // Extract from component state
        const {
            userName,
            password } = this.state;

        if(authentication.isAuthenticated == false ||
            authentication.isAuthenticated === undefined)
        {

            return (
                <div className="column">
                    <h2 className="ui teal image header">
                    <div className="content">
                        Log-in to your account
                    </div>
                    </h2>
                    <form role="form" onSubmit={this._onSubmit.bind(this)} className="ui large form">
                    <div className="ui stacked segment">
                        <div className="field">
                        <div className="ui left icon input">
                            <i className="user icon"></i>
                            <input type="text" 
                                   name="user" 
                                   placeholder="User"
                                   onChange={ (evt) => {
                                               this.setState({
                                                   userName: evt.target.value
                                               });
                                           }}/>
                        </div>
                        </div>
                        <div className="field">
                        <div className="ui left icon input">
                            <i className="lock icon"></i>
                            <input type="password" 
                                   name="password" 
                                   placeholder="Password"
                                   onChange={ (evt) => {
                                               this.setState({
                                                   password: evt.target.value
                                               });
                                           }}/>
                        </div>
                        </div>
                        <div className="ui fluid large teal submit button" onClick={this._onSubmit.bind(this)}>Login</div>
                    </div>

                    <div className="ui error message"></div>

                    </form>

                    <div className="ui message">
                    Having problems? <a href="#">Contact Someone.</a>
                    </div>
                </div>
            );
        }
        else {
        /*   return (<div>
                      <p>
                      You are already logged in.
                      <a onClick={forgetLogin} href="#">Click here to logout!</a>
                      </p>
                    </div>)*/
            transitionTo('/');
        }
    }

    /**
     * Main rending function.
     * @return Form Container
     */
    render() {

        const { counter, authentication } = this.props;

        if(authentication.requesting) {
            return (
            <div>
            <Dimmer active inverted>
                <Loader inverted>Logging in..</Loader>
            </Dimmer>
            <div className={`${styles}`}>
            <div className="ui middle aligned center aligned grid">
            {this.renderForm()}
            </div>
            </div>
            </div>)
        }

        return (
            <div className={`${styles}`}>
            <div className="ui middle aligned center aligned grid">
            {this.renderForm()}
            </div>
            </div>
        );
    }
}

// Validation of Types.
LoginForm.propTypes = {
    authentication : PropTypes.object.isRequired
};

export default LoginForm;
