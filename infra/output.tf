# Output the API endpoint URL
output "api_endpoint" {
  value = "${aws_api_gateway_stage.api_gateway_stage.invoke_url}/"
}

output "dynamodb_table"{
  value =aws_dynamodb_table.resume_table.name
}