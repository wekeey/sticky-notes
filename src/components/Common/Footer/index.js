import React, { Component } from 'react';
import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            &copy;梦想屋
                        </div>
                        <div className="col-8 text-right">
                            <a href="http://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">豫ICP备14013430号</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
