import { PROXY_SERVER_URL } from "../constants/values"

async function invokeFunction(url, username, password, body, function_name) {

    // modify to handle json and text body differently

    const requestOptions = {
        method: "POST",
        headers: {
            'Authorization': 'Basic ' + btoa(username + ':' + password),
            'origin': PROXY_SERVER_URL,
            'ngrok-skip-browser-warning': 'yes'
         },
        body: body
    }
    const response = await fetch(`${PROXY_SERVER_URL}/${url}/function/${function_name}`, requestOptions)
    console.log(response)

    const resMessage = await response.text()
    //const resMessage = await response.json()

    console.log(resMessage)
    return {message : resMessage, status : response.status}
}

export default invokeFunction;