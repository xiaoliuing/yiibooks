import React, { Component } from 'react';
import { Table, Input, Button, Modal, message } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { tableTitles } from '../../utils';
import request from '../../utils/request';
import './index.css';

const { confirm } = Modal;
class Index extends Component{
  constructor(props) {
    super(props);
    this.state = {
      resData: [],
      data: [],
      currTotle: '',
      tableList: tableTitles
    }
  }

  editClick = (record, type) => {
    const { data } = this.state;
    const { id } = record;
    if(type === 'del') {
      confirm({
        title: '确认要删除该条内容吗?',
        content: '该操作不可逆',
        okText: '确认',
        okType: 'danger',
        cancelText: '取消',
        onOk: () => {
          request(`/${type}&id=${id}`).then(res => {
            if(res.status === 200) {
              message.success('删除成功');
              let _data = data;
              const index = _data.findIndex(item => {
                return item.id === id;
              });
              _data.splice(index, 1);
              this.setState({
                data: _data,
                resData: _data,
                currTotle: _data.length
              });
            }
          })
        }
      });
      return null;
    }
    this.props.history.push(`/${type}/${JSON.stringify(record)}`);
  }

  componentDidMount = async () => {
    const new_tableList = this.state.tableList;
    let arr = [];
    await request('').then(res => {
      arr = res.data.map((item, index) => {
        item.key = index;
        return {
          ...item
        }
      })
    })

    new_tableList.push({
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      align: 'center',
      render: (text, record) => (
        <span className={'span-action'}>
          <span onClick={() => this.editClick(record, 'update')}>编辑</span>-
          <span onClick={() => this.editClick(record, 'look')}>查看</span>-
          <span onClick={() => this.editClick(record, 'del')}>删除</span>
        </span>
      )
    })
    
    this.setState({
      data: arr,
      resData: arr,
      currTotle: arr.length,
      tableList: new_tableList
    })
  }

  handleEnter = (e) => {
    const { resData } = this.state;
    let val = e.target.value;
    let new_arr = [];
    resData.forEach(item => {
      const { b_name, b_autor } = item;
      (b_name.indexOf(val) !== -1 || b_autor.indexOf(val) !== -1) && new_arr.push(item);
    });
    this.setState({
      data: new_arr
    });
  }

  handleChange = (e) => {
    const { resData } = this.state;
    if(!e.target.value.trim()) {
      this.setState({
        data: resData
      })
    }
  }

  componentWillUnmount = () => {
    tableTitles.pop();
  }

  render() {
    const { data, currTotle, tableList } = this.state;
    return <div className={'index-page'}>
      <h1>图书管理系统</h1>
      <Link to="/add">
        <Button
          type="primary"
          icon="plus"
        >
          添加书籍
        </Button>
      </Link>
      <Input
        placeholder="关键字查询（作者，书名）"
        className={'input'}
        onPressEnter={this.handleEnter}
        onChange={this.handleChange}
      />
      <Table
        dataSource={data} 
        columns={tableList}
        bordered={true}
        pagination={{defaultCurrent: 1, total: currTotle, defaultPageSize: 6}}
      />
    </div>
  }
}

export default withRouter(Index);