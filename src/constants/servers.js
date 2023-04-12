const serverInfo = [
    {
        "id":1,
        "ip_address": 'ec2-18-196-120-124.eu-central-1.compute.amazonaws.com',
        "architecture": "Arm",
        "state":"Running",
        "username":'admin',
        'password':'bura password koy',
        'type': 'Edge'
    },
    {
        "id":2,
        "ip_address": 'ec2-3-67-71-210.eu-central-1.compute.amazonaws.com',
        "architecture": "Amd",
        "state":"Running",
        "username":'admin',
        'password':'bura password koy',
        'type': 'Cloud'
    },
]

module.exports = {
    serverInfo
  };