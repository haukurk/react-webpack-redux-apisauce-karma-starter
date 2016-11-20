import React, { Component } from 'react';
import { Link } from 'react-router';
import { styles } from './styles.scss';
import { Button, Confirm } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';

import "../../../semantic/dist/components/visibility";

/**
 * General Header Component
 */
export class Header extends Component {

    state = { open: false }
    show = () => this.setState({ open: true });
    handleConfirm = () => {
      this.setState({ open: false });
      this.props.forgetLogin();
    }
    handleCancel = () => this.setState({ open: false });

    componentDidMount() {
        // fix main menu to page on passing - this still has to depend on jQuery for now :(
        $(this.refs.mainmenu).visibility({
        type: 'fixed'
        });
    }

    /**
     * Main render function for the Header
     * @return Header
     */
    render() {

        let { isAuthenticated } = this.props;
        let { open } = this.state;

        return (
            <div className={`${styles}`}>
            <Confirm
              open={open}
              onCancel={this.handleCancel}
              onConfirm={this.handleConfirm}
            />
            <div className="ui borderless main menu" ref="mainmenu">
            <div className="ui text container">
            <div className="header item">
                <img className="logo" src="assets/img/logo.png"/>
                Starter
            </div>
            {isAuthenticated ? <a href="#" onClick={this.show} className="item">Logout</a>
            : <Link to="login" className="item">Login</Link>}
            <Link to="counter" className="item">Counter</Link>
            <Dropdown text='Settings' className="right floated item">
                <Dropdown.Menu>
                <Dropdown.Item text='New' />
                <Dropdown.Item text='Open...' description='ctrl + o' />
                <Dropdown.Item text='Save as...' description='ctrl + s' />
                <Dropdown.Item text='Rename' description='ctrl + r' />
                <Dropdown.Item text='Make a copy' />
                <Dropdown.Item icon='folder' text='Move to folder' />
                <Dropdown.Item icon='trash' text='Move to trash' />
                <Dropdown.Divider />
                <Dropdown.Item text='Download As...' />
                <Dropdown.Item text='Publish To Web' />
                {/* item text can also be defined as children */}
                <Dropdown.Item>E-mail Collaborators</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
        </div>
        </div>
        );
    }
}
