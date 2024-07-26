# Cloud Provider
provider "aws" {
  region     = var.region        
  access_key = var.access_key    
  secret_key = var.secret_key    
}
# Create DynamoDB Table
resource "aws_dynamodb_table" "resume_table" {
  name          = "Resumes"
  billing_mode  = "PROVISIONED"
  read_capacity = 5
  write_capacity = 5

  attribute {
    name = "id"
    type = "S"
  }

  hash_key = "id"
}

# Create an IAM Role for Lambda Execution
resource "aws_iam_role" "lambda_execution_role" {
  name = "Cloud-Resume-Role"     

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect    = "Allow",
      Principal = {
        Service = "lambda.amazonaws.com"  
      },
      Action    = "sts:AssumeRole"
    }]
  })
}

# Attach the necessary policies to the Lambda execution role
resource "aws_iam_role_policy_attachment" "lambda_basic_execution" {
  role       = aws_iam_role.lambda_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# Create a policy to provide DynamoDB full access
resource "aws_iam_policy" "dynamodb_full_access" {
  name        = "DynamoAccessPolicy" 
  description = "Policy to allow full access to DynamoDB"  

  policy      = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect   = "Allow",
      Action   = [
        "dynamodb:*"  
      ],
      Resource = "*"   
    }]
  })
}

# Attach the DynamoDB policy to the Lambda execution role
resource "aws_iam_role_policy_attachment" "lambda_dynamodb_policy" {
  role       = aws_iam_role.lambda_execution_role.name  
  policy_arn = aws_iam_policy.dynamodb_full_access.arn   
}


# Upload the Lambda function code in a ZIP file
resource "aws_lambda_function" "create_function" {
  filename      = "${path.module}/../files/index.zip"  # Path to the Lambda function ZIPPED file
  function_name = "Cloud-Resume-API"   
  role          = aws_iam_role.lambda_execution_role.arn 
  handler       = "index.lambda_handler"  
  runtime       = "python3.11"            
}

# Create a REST API in API Gateway
resource "aws_api_gateway_rest_api" "resume_api" {
  name        = "ResumeAPI"                 
  description = "API Gateway for Cloud Resume API Challenge"  

  endpoint_configuration {
    types = ["REGIONAL"]                      
  }
}

# Define a GET method for the root resource of the API Gateway
resource "aws_api_gateway_method" "get_method" {
  rest_api_id   = aws_api_gateway_rest_api.resume_api.id  
  resource_id   = aws_api_gateway_rest_api.resume_api.root_resource_id  
  http_method   = "GET"                        
  authorization = "NONE"                       
}

# Configure integration between API Gateway and Lambda function
resource "aws_api_gateway_integration" "integration" {
  rest_api_id             = aws_api_gateway_rest_api.resume_api.id  
  resource_id             = aws_api_gateway_rest_api.resume_api.root_resource_id  
  http_method             = aws_api_gateway_method.get_method.http_method  
  integration_http_method = "POST"  
  type                    = "AWS_PROXY"        
  uri                     = aws_lambda_function.create_function.invoke_arn 
}

# Allow API Gateway to invoke the Lambda function
resource "aws_lambda_permission" "api_gateway_lambda_permission" {
  statement_id  = "AllowAPIGatewayInvoke"    
  action        = "lambda:InvokeFunction"      
  function_name = aws_lambda_function.create_function.function_name  
  principal     = "apigateway.amazonaws.com"   
  source_arn    = "${aws_api_gateway_rest_api.resume_api.execution_arn}/*/*"  
}

# Deploy the API Gateway
resource "aws_api_gateway_deployment" "api_gateway_deployment" {
  rest_api_id = aws_api_gateway_rest_api.resume_api.id  

  lifecycle {
    create_before_destroy = true               
  }

  depends_on = [
    aws_api_gateway_integration.integration,
    aws_api_gateway_method.get_method
  ]
}

# Create a stage for the API Gateway deployment
resource "aws_api_gateway_stage" "api_gateway_stage" {
  rest_api_id   = aws_api_gateway_rest_api.resume_api.id  
  deployment_id = aws_api_gateway_deployment.api_gateway_deployment.id 
  stage_name    = "prod"                      
}

