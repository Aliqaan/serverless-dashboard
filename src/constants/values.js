const PROMETHEUS_URL = 'http://localhost:9090'
const PROXY_SERVER_URL = 'http://localhost:3131'
const DEPLOY_SERVER_URL = 'http://localhost:3132'

module.exports = {
    PROMETHEUS_URL,   // used in GetMetrics.js
    PROXY_SERVER_URL,  // used in faasd requests
    DEPLOY_SERVER_URL // used in function deploy
  };