const serverInfo = [
    {
        "id":1,
        //used for endpoint calls such as function invoke and function list
        "ip_address": 'http://ec2-3-72-104-177.eu-central-1.compute.amazonaws.com:8080',
        //used for monitoring purposes
        "prometheus_address":"ec2-3-72-104-177.eu-central-1.compute.amazonaws.com:9100",
        "architecture": "Arm",
        "state":"Running",
        "username":'admin',
        'password':'UqwjGj3B3Ew3V5QBGPSXRReZxGmGBtzk1CqdwXCvEzVkC18s6XruUqrl5v4ryGP',
        'type': 'Cloud'
    },
    {
        "id":2,
        "ip_address": 'http://ec2-52-57-227-111.eu-central-1.compute.amazonaws.com:8080',
        "prometheus_address":"ec2-52-57-227-111.eu-central-1.compute.amazonaws.com:9100",
        "architecture": "Amd",
        "state":"Running",
        "username":'admin',
        'password':'AFiYw9HvVYzpJgGCusPZQP2AMbzDH1sJVtb6Izfs5OzJnsE00VkeW4x3lXf4pVQ',
        'type': 'Cloud'
    },
    {
        "id":3,
        //address from the ngrok tunneling ngrok http 8080
        //"ip_address": 'https://7e18-94-123-218-2.eu.ngrok.io',
        "ip_address": 'http://da7c-94-123-223-81.ngrok-free.app:80',
        //address from the ngrok tunneling with ngrok http 9100 --scheme http
        //"prometheus_address":"e496-94-123-218-2.ngrok-free.app:80",
        "prometheus_address":"09e5-94-123-223-81.ngrok-free.app:80",
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