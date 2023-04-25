#!/bin/bash
gateway=$1
password=$2
function_name=$3
function_code='def handle(req):\n    """handle a request to the function here\n    Args:\n    req (str): request body\n    """\n    return req'
architecture=$4

echo "gateway: $gateway"
echo "password: $password"
echo "function_name: $function_name"

# Login to OpenFaaS
echo "Logging in to OpenFaaS..."
echo $password | faas-cli login -g $gateway --password-stdin

# Directory for functions and yml file
# Change it in the deployed server
cd /Users/alikaanbiber/Desktop/functions

# Create new function
echo "Creating new function '$function_name'..."
faas-cli new $function_name --lang python3


# Copy function code to function directory
echo "Copying function code to '$function_name' directory..."
echo $function_code > ./$function_name/handler.py

# Modify the yml file with image name
echo "Writing yml file"
cat <<EOF >${function_name}.yml
version: 1.0
provider:
  name: openfaas
  gateway: ${gateway}
functions:
  ${function_name}:
    lang: python3
    handler: ./${function_name}
    image: alikaanbiber/faasd-test:latest
EOF

# Publish function Docker image to registry
echo "Publishing Docker image for '$function_name'..."
faas-cli publish -f $function_name.yml --platforms $architecture

# Deploy Function to Faasd
echo "Deploying '$function_name' to Faasd..."
faas-cli deploy -f $function_name.yml