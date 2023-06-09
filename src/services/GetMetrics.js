import { PROMETHEUS_URL, PROXY_SERVER_URL } from "../constants/values"

async function getMetrics(isMemory, server_address) {

    const now = Date.now()
    const oneHourAgo = now - ( 60 * 60 * 1000)
    const nowTimestamp = Math.floor(now/1000)
    const oneHourAgoTimestamp = Math.floor(oneHourAgo/1000)

    const requestOptions = {
        method: "GET",
        headers: {
            'Bypass-Tunnel-Reminder': 'yes'
         },
    }

    let url;
    if(isMemory){
        url = `${PROXY_SERVER_URL}/${PROMETHEUS_URL}/api/v1/query_range?query=100+*+(1+-+(node_memory_MemAvailable_bytes+/+node_memory_MemTotal_bytes{instance="${server_address}"}))&start=${oneHourAgoTimestamp}&end=${nowTimestamp}&step=14`
    } else {
        url = `${PROXY_SERVER_URL}/${PROMETHEUS_URL}/api/v1/query_range?query=100+-+(avg+by+(instance)+(irate(node_cpu_seconds_total{mode="idle",+instance="${server_address}"}[5m]))+*+100)&start=${oneHourAgoTimestamp}&end=${nowTimestamp}&step=14`
    }

    const response = await fetch(url, requestOptions)
    const resMessage = await response.json()

    if (response.status === 200) {
        console.log(resMessage)
        return resMessage
    } else {
        console.log(resMessage)
        return resMessage
    }
}

export default getMetrics;