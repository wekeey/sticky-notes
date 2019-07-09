import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {

    // 新增便签
    add() {
        this.props.add();
    }

    render() {
        return (
            <header>
                <nav className="navbar fixed-top navbarHeader">
                    <div className="container">
                        <div className="navbar-brand py-2 logo">便签</div>
                        <button type="button" className="btn btn-success" onClick={this.add.bind(this)}>新增</button>
                    </div>
                </nav>
            </header>
        );
    }
}
