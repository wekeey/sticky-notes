import React, {Component} from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Item from '../Item';
import './style.css';

export default class App extends Component {

    constructor(props) {
        super(props);

        let list = this.get();
        if (list == null) {
            list = [{
                title: '',
                content: '',
                date: this.getCurentTime()
            }];
        }

        this.state = {
            list: list
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handelDel = this.handelDel.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
    }

    // 新增便签
    handleAdd() {
        const list = [
            {
                title: '',
                content: '',
                date: this.getCurentTime()
            },
            ...this.state.list
        ];

        this.setState({
            list: list
        })

        this.save(list);
    }

    // 删除便签
    handelDel(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        if (list.length < 1) {
            list.unshift({
                title: '',
                content: '',
                date: this.getCurentTime()
            });
        }
        this.setState({
            list: list
        })

        this.save(list);
    }

    // 便签标题修改
    handleTitleChange(index, title) {
        const list = [...this.state.list];
        list[index]['title'] = title;
        this.setState({
            list: list
        })

        this.save(list);
    }

    // 便签内容修改
    handleContentChange(index, content) {
        const list = [...this.state.list];
        list[index]['content'] = content;
        this.setState({
            list: list
        })

        this.save(list);
    }

    // 读取便签
    get() {
        return JSON.parse(localStorage.getItem('notelist'));
    }

    // 保存便签
    save(list) {
        const data = JSON.stringify(list);
        localStorage.setItem('notelist', data);
    }

    // 获取当前时间
    getCurentTime() {
        var now = new Date();

        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();

        var hh = now.getHours();
        var mm = now.getMinutes();
        var ss = now.getSeconds();

        var clock = year + "-";

        if(month < 10) clock += "0";
        clock += month + "-";

        if(day < 10) clock += "0";
        clock += day + " ";

        if(hh < 10) clock += "0";
        clock += hh + ":";

        if (mm < 10) clock += '0';
        clock += mm + ":";

        if (ss < 10) clock += '0';
        clock += ss;

        return (clock);
    }

    render() {
        return (
            <div>
                <Header add={this.handleAdd} />

                <div className="container">
                    <div className="row">

                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <Item
                                        item={item}
                                        index={index}
                                        key={index}
                                        del={this.handelDel}
                                        titleChange={this.handleTitleChange}
                                        contentChange={this.handleContentChange}
                                    />
                                )
                            })
                        }

                    </div>

                </div>

                <Footer />
            </div>
        )
    }
}
