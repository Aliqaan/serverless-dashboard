const PROMETHEUS_URL = 'https://prometheus-server.loca.lt'
const PROXY_SERVER_URL = 'http://3.75.84.23:3131'
const DEPLOY_SERVER_URL = 'http://3.75.84.23:3132'

module.exports = {
    PROMETHEUS_URL,   // used in GetMetrics.js
    PROXY_SERVER_URL,  // used in faasd requests
    DEPLOY_SERVER_URL // used in function deploy
  };