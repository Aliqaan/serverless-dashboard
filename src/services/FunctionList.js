import { PROXY_SERVER_URL } from "../constants/values"

async function getFunctions(url, username, password) {

    const requestOptions = {
        method: "GET",
        headers: {
            'Authorization': 'Basic ' + btoa(username + ':' + password),
            'origin': PROXY_SERVER_URL,
            'ngrok-skip-browser-warning': 'yes'
         },
    }
    const response = await fetch(`${PROXY_SERVER_URL}/${url}/system/functions`, requestOptions)
    console.log(response)
    const resMessage = await response.json()

    if (response.status === 200) {
        console.log(resMessage)
        return resMessage
    } else {
        console.log(resMessage)
        return resMessage["error"]
    }
}

export default getFunctions;