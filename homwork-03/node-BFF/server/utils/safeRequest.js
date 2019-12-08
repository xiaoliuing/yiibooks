const fetch = require('node-fetch');
import config from '../config';

class SafeRequest {
  constructor({ url }) {
    this.baseUrl = config.baseUrl;
    this.url = url;
  }
  fetch(method = 'GET', body = {}) {
    const resData = {
      code: 0,
      message: '',
      data: []
    }

    return new Promise((resolve, reject) => {
      const obj = method === 'GET' ? {method} : {method, body: this._bodyParams(body), headers: { 'Content-Type': 'application/x-www-form-urlencoded'  }};
      let _fetch = fetch(this.baseUrl + this.url, obj);

      _fetch.then(res => res.json())
        .then((json) => {
          console.log(json);
          resData.data = json;
          resolve(resData);
        }).catch((error) => {
          console.log(error);
          resData.code = 1;
          resData.message = '❌ 接口异常';
          reject(resData);
        })
    })
  }
  _bodyParams(params = {}){
    const param = new URLSearchParams();
    for(let key in params) {
        param.append(key,params[key]);
    }
    return param;
}
}

export default SafeRequest;