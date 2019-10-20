import React from 'react';
import { Input, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './index.css';

const Edit = (props) => {
  let data = JSON.parse(props.match.params.id);

  const updateEvent = () => {
    props.history.push(`/update/${JSON.stringify(data)}`);
  }

  return <div className={'add-page'}>
    <h1>查看书籍信息</h1>
    <Input
      addonBefore="书名"
      className={'input'}
      defaultValue={data.b_name}
      disabled={true}
    />
    <Input
      addonBefore="作者"
      className={'input'}
      defaultValue={data.b_autor}
      disabled={true}
    />
    <Input
      addonBefore="价格"
      className={'input'}
      defaultValue={data.b_price}
      disabled={true}
    />
    <Button
      type="primary"
      icon="highlight"
      size={'large'}
      onClick={updateEvent}
    >
      修改
    </Button>
    <Link to="/">
      <Button
        type="primary"
        size={'large'}
        icon="double-left"
      >
        返回
      </Button>
    </Link>
  </div>
}

export default withRouter(Edit);