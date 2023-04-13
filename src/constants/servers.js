const serverInfo = [
    {
        "id":1,
        "ip_address": 'ec2-18-196-120-124.eu-central-1.compute.amazonaws.com',
        "architecture": "Arm",
        "state":"Running",
        "username":'admin',
        'password':'UqwjGj3B3Ew3V5QBGPSXRReZxGmGBtzk1CqdwXCvEzVkC18s6XruUqrl5v4ryGP',
        'type': 'Edge'
    },
    {
        "id":2,
        "ip_address": 'ec2-3-67-71-210.eu-central-1.compute.amazonaws.com',
        "architecture": "Amd",
        "state":"Running",
        "username":'admin',
        'password':'vIhxExx3LwmNaX7DxFOFf6lgyrS3mbXbQ0W3TotqdhgTYskzK71h6ZrNY6dIGLc',
        'type': 'Cloud'
    },
]

module.exports = {
    serverInfo
  };