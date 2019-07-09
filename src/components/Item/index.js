import React, { Component } from 'react';
import './style.css';

export default class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // 修改标题
    titleChange(index, e) {
        const title = e.target.value;
        this.props.titleChange(index, title);
    }

    // 修改内容
    contentChange(index, e) {
        const content = e.target.value;
        this.props.contentChange(index, content);
    }

    // 删除便签
    del(index) {
        this.props.del(index);
    }

    render () {
        return (
            <div className="col-md-6 col-lg-4">
                <div className="card">
                    <h5 className="card-header d-flex">
                        <input className="flex-grow-1" value={this.props.item.title} onChange={this.titleChange.bind(this, this.props.index)} placeholder="标题..." tabIndex={this.props.index + "1"}></input>
                        <button type="button" className="close ml-2" aria-label="Close" onClick={this.del.bind(this, this.props.index)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </h5>
                    <div className="card-body">
                        <textarea value={this.props.item.content} onChange={this.contentChange.bind(this, this.props.index)} placeholder="内容..." tabIndex={this.props.index + "2"}>{this.props.item.content}</textarea>
                    </div>
                    <div className="card-footer text-muted">
                        {this.props.item.date}
                    </div>
                </div>
            </div>
        )
    }
}
