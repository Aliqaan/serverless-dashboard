import { DEPLOY_SERVER_URL } from "../constants/values"

async function deployFunction(gateway, password, function_name, function_code, architecture) {

    const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
            gateway: gateway,
            password: password,
            function_name: function_name,
            function_code: function_code,
            architecture: architecture
        })
    }

    const response = await fetch(`${DEPLOY_SERVER_URL}/deploy-script`, requestOptions)
    const resMessage = await response.text()

    if (response.status === 200) {
        console.log(resMessage)
        return 'Success'
    } else {
        console.log(resMessage)
        return 'Fail'
    }
}

export default deployFunction;