import React from 'react';
import { Input, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import request from '../../utils/request';
import './index.css';

const Edit = (props) => {
  let data = JSON.parse(props.match.params.id);

  const saveEvent = () => {
    request(`/update&id=${data['id']}&name=${data['b_name']}&autor=${data['b_autor']}&price=${data['b_price']}`).then(res => {
      if(res.status === 200) {
        props.history.push('/');
      }
    })
  }

  const changeEvent = (e, type) => {
    const { value } = e.target;
    data[type] = value;
  }

  return <div className={'add-page'}>
    <h1>修改书籍信息</h1>
    <Input
      addonBefore="书名"
      className={'input'}
      onChange={(e) => changeEvent(e, 'b_name')}
      defaultValue={data.b_name}
    />
    <Input
      addonBefore="作者"
      className={'input'}
      onChange={(e) => changeEvent(e, 'b_autor')}
      defaultValue={data.b_autor}
    />
    <Input
      addonBefore="价格"
      className={'input'}
      onChange={(e) => changeEvent(e, 'b_price')}
      defaultValue={data.b_price}
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

export default withRouter(Edit);