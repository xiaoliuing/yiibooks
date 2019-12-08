import _ from 'lodash';
const { join } = require('path');
let config =  {
  'staticDir': join(__dirname, '../..', 'assets'),
}

if (process.env.NODE_ENV == "development") {
  const localConfig = {
    port: 3002,
    baseUrl: "http://localhost:8081/index.php?r=ybooks"
  }
  config = _.extend(config, localConfig);
}
if (process.env.NODE_ENV == "production") {
  const prodConfig = {
      port: 80,
      baseUrl: "http://localhost:8080/"
  }
  config = _.extend(config, prodConfig);
}

export default config;