def handle(req):
    result = 0
    for i in range(400000):
        result += i * i
