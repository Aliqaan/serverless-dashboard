async function getFunctions(url, username, password) {

    const requestOptions = {
        method: "GET",
        headers: {
            'Authorization': 'Basic ' + btoa(username + ':' + password) 
         },
    }
    console.log(btoa(username + ':' + password))
    const response = await fetch('https://cors-anywhere.herokuapp.com/http://' + url + ":8080/system/functions", requestOptions)
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