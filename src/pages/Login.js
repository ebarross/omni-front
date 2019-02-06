import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {
    state = {
        username: ''
    }

    handleChange = (e) => {
        this.setState({ username: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { username } = this.state;

        if (!username) return;

        localStorage.setItem('@GoTwitter:username', username);

        this.props.history.push('/timeline');
    }

    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="GoTwitter" />
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.username} onChange={this.handleChange} placeholder="Nome de usuário" type="text" />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}
