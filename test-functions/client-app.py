def handle(req):
    #Memory intensive
    for i in range(20):
        data = [0] * 5000000

    #Cpu intensive
    result = 0
    for i in range(400000):
        result += i * i

    #Memory intensive
    for i in range(20):
        data2 = [0] * 5000000
