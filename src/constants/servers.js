const serverInfo = [
    {
        "id":1,
        //used for endpoint calls such as function invoke and function list
        "ip_address": 'http://ec2-18-196-120-124.eu-central-1.compute.amazonaws.com:8080',
        //used for monitoring purposes
        "prometheus_address":"ec2-18-196-120-124.eu-central-1.compute.amazonaws.com:9100",
        "architecture": "Arm",
        "state":"Running",
        "username":'admin',
        'password':'UqwjGj3B3Ew3V5QBGPSXRReZxGmGBtzk1CqdwXCvEzVkC18s6XruUqrl5v4ryGP',
        'type': 'Cloud'
    },
    {
        "id":2,
        "ip_address": 'Set when server open',
        "prometheus_address":"Set when server open",
        "architecture": "Amd",
        "state":"Paused",
        "username":'admin',
        'password':'vIhxExx3LwmNaX7DxFOFf6lgyrS3mbXbQ0W3TotqdhgTYskzK71h6ZrNY6dIGLc',
        'type': 'Cloud'
    },
    {
        "id":3,
        //address from the ngrok tunneling ngrok http 8080
        //"ip_address": 'https://7e18-94-123-218-2.eu.ngrok.io',
        "ip_address": 'https://7e18-94-123-218-2.eu.ngrok.io',
        //address from the ngrok tunneling with ngrok http 9100 --scheme http
        //"prometheus_address":"e496-94-123-218-2.ngrok-free.app:80",
        "prometheus_address":"2d16-94-123-223-81.ngrok-free.app:80",
        "architecture": "Arm",
        "state":"Running",
        "username":'admin',
        'password':'Qk72tOBjuF1rfJd7qgJRHq02zOdz8HiNnnMU2RtQwvbuPfGocmuweQP1xpirqq4',
        'type': 'Edge'
    },
]

module.exports = {
    serverInfo
  };