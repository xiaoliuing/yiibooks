import React from 'react';
import { Input, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import request from '../../utils/request';
import './index.css';

const Add = (props) => {
  let data = {};

  const saveEvent = () => {
    request(`/add&name=${data['name']}&autor=${data['autor']}&price=${data['price']}`).then(res => {
      if(res.status === 200) {
        console.log(res);
        
        props.history.goBack();
      }
    })
  }

  const changeEvent = (e, type) => {
    const { value } = e.target;
    data[type] = value;
  }

  return <div className={'add-page'}>
    <h1>添加书籍</h1>
    <Input
      addonBefore="书名"
      placeholder="请输入书籍名称..."
      className={'input'}
      onChange={(e) => changeEvent(e, 'name')}
    />
    <Input
      addonBefore="作者"
      placeholder="请输入书籍作者..."
      className={'input'}
      onChange={(e) => changeEvent(e, 'autor')}
    />
    <Input
      addonBefore="价格"
      placeholder="请输入书籍价格..."
      className={'input'}
      onChange={(e) => changeEvent(e, 'price')}
    />
    <Button
      type="primary"
      icon="check-circle"
      size={'large'}
      onClick={saveEvent}
    >
      保存
    </Button>
    <Link to="/">
      <Button
        type="primary"
        size={'large'}
        icon="check-circle"
      >
        取消
      </Button>
    </Link>
  </div>

}

export default withRouter(Add);