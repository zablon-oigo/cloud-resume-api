import json
import boto3

def lambda_handler(event, context):
    # Initialize the DynamoDB client
    dynamodb_client = boto3.resource('dynamodb')
    
    # Specify the DynamoDB table name
    dynamodb_table = dynamodb_client.Table('Resumes')
    
    try:
        # Scan the DynamoDB table to retrieve all items
        response = dynamodb_table.scan()
        
        # Extract items from the response
        items = response['Items']
        
        # Return the items in the response body as a JSON string 
        return {
            'statusCode': 200,
            'body': json.dumps(items)
        }
    except Exception as e:
        # Handle any errors that occur and return a 500 status code with the error message
        return {
            'statusCode': 500,
            'body': f'Error: {str(e)}'
        }
