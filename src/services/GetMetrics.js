async function getMetrics(url) {

    const requestOptions = {
        method: "GET"
    }
    const response = await fetch('http://localhost:9090/api/v1/query_range?query=node_memory_MemAvailable_bytes&start=1681733771.949&end=1681737371.949&step=14', requestOptions)
    const resMessage = await response.json()

    if (response.status === 200) {
        console.log(resMessage)
        return resMessage
    } else {
        console.log(resMessage)
        return resMessage["error"]
    }
}

export default getMetrics;