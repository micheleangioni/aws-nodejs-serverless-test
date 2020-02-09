## Test Repo

### Description

This minimalistic repo has the only purpose to demonstrate a bug in Localstack

### Steps to reproduce

1. Run Localstack via docker compose by running `docker-compose up`
2. Deploy the application locally via `npm run deploy-local`
3. Observe the following error:

```
localstack_1  | 2020-02-09T16:43:29:ERROR:localstack.services.cloudformation.cloudformation_starter: Unable to parse and create resource "ApiGatewayDeployment1581266602906": An error occurred (BadRequestException) when calling the CreateDeployment operation: The REST API doesn't contain any methods Traceback (most recent call last):
localstack_1  |   File "/opt/code/localstack/localstack/services/cloudformation/cloudformation_starter.py", line 174, in parse_and_create_resource
localstack_1  |     return _parse_and_create_resource(logical_id, resource_json, resources_map, region_name)
localstack_1  |   File "/opt/code/localstack/localstack/services/cloudformation/cloudformation_starter.py", line 261, in _parse_and_create_resource
localstack_1  |     result = deploy_func(logical_id, resource_wrapped, stack_name=stack_name)
localstack_1  |   File "/opt/code/localstack/localstack/utils/cloudformation/template_deployer.py", line 715, in deploy_resource
localstack_1  |     result = deploy_resource_via_sdk_function(resource_id, resources, resource_type, func, stack_name)
localstack_1  |   File "/opt/code/localstack/localstack/utils/cloudformation/template_deployer.py", line 785, in deploy_resource_via_sdk_function
localstack_1  |     raise e
localstack_1  |   File "/opt/code/localstack/localstack/utils/cloudformation/template_deployer.py", line 782, in deploy_resource_via_sdk_function
localstack_1  |     result = function(**params)
localstack_1  |   File "/opt/code/localstack/.venv/lib/python3.7/site-packages/botocore/client.py", line 272, in _api_call
localstack_1  |     return self._make_api_call(operation_name, kwargs)
localstack_1  |   File "/opt/code/localstack/.venv/lib/python3.7/site-packages/botocore/client.py", line 576, in _make_api_call
localstack_1  |     raise error_class(parsed_response, operation_name)
localstack_1  | botocore.errorfactory.BadRequestException: An error occurred (BadRequestException) when calling the CreateDeployment operation: The REST API doesn't contain any methods
localstack_1  |
localstack_1  | 2020-02-09T16:43:29:DEBUG:localstack.services.cloudformation.cloudformation_listener: Error response from CloudFormation (400) POST /: b"The REST API doesn't contain any methods"
```
