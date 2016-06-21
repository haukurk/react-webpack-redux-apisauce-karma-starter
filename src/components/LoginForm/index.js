import React, { Component, PropTypes } from 'react';

import { styles } from './styles.scss';

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
            dispatch,
            loginWithAPI,
            forgetLogin } = this.props;

        // Extract from component state
        const {
            userName,
            password } = this.state;

        if(authentication.authenticated == false ||
            authentication.authenticated === undefined)
        {
            // TODO: Componize more.
            return (
                <div className="row">
                   <div className="col-md-4 col-md-offset-4">
                       <div className="panel panel-default">
                           <div className="panel-heading">
                               <h3 className="panel-title">Loginizer!</h3>
                           </div>
                           <div className="panel-body">
                               <form onSubmit={this._onSubmit.bind(this)} role="form">
                               <fieldset>
                                   <div className="form-group">
                                       <input
                                           value={this.state.userName}
                                           onChange={ (evt) => {
                                               this.setState({
                                                   userName: evt.target.value
                                               });
                                           }}
                                           className="form-control"
                                           placeholder="Your username"
                                           name="text"
                                           type="text" />
                                   </div>
                                   <div className="form-group">
                                       <input
                                           value={this.state.password}
                                           onChange={ (evt) => {
                                               this.setState({
                                                   password: evt.target.value
                                               });
                                           }}
                                           className="form-control"
                                           placeholder="Password"
                                           name="password"
                                           type="password" />
                                   </div>
                                   <div className="checkbox">
                                       <label>
                                           <input name="remember" type="checkbox" value="Remember Me" /> Remember Me
                                       </label>
                                   </div>
                                   <input className="btn btn-lg btn-success btn-block" type="submit" value="Login" />
                               </fieldset>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
            );
        }
        else {
            return <a onClick={forgetLogin} href="#">Forget my login tokens!</a>;
        }
    }

    /**
     * Main rending function.
     * @return Form Container
     */
    render() {

        const { counter } = this.props;

        return (
            <div className="panel panel-default">
                <div className="panel-body">
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
