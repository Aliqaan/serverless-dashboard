async function invokeFunction(url, username, password, body) {

    // modify to handle json and text body differently

    const requestOptions = {
        method: "POST",
        headers: {
            'Authorization': 'Basic ' + btoa(username + ':' + password) 
         },
        body: body
    }
    const response = await fetch('https://cors-anywhere.herokuapp.com/' + url, requestOptions)
    console.log(response)

    const resMessage = await response.text()
    //const resMessage = await response.json()

    console.log(resMessage)
    return {message : resMessage, status : response.status}
}

export default invokeFunction;