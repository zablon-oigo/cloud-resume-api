# Output the API endpoint URL
output "api_endpoint" {
  value = "${aws_api_gateway_stage.api_gateway_stage.invoke_url}/"
}
