import json
import boto3
import logging

# Set up logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    dynamodb_client = boto3.resource('dynamodb')
    dynamodb_table = dynamodb_client.Table('Resumes')
    
    try:
        # Fetch the item by its primary key
        response = dynamodb_table.get_item(Key={'id': '1'})
        
        if 'Item' not in response:
            return {
                'statusCode': 404,
                'body': json.dumps({'error': 'Item not found'})
            }
        
        item = response['Item']
        
        # Log the current views count
        current_views_count = int(item['viewsCount'])
        logger.info(f"Current views count: {current_views_count}")
        
        # Increment the views count
        views_count = current_views_count + 1
        item['viewsCount'] = views_count
        
        # Update the item in DynamoDB
        dynamodb_table.put_item(Item=item)
        
        # Log the new views count
        logger.info(f"New views count: {views_count}")
        
        return {
            'statusCode': 200,
            'body': json.dumps(item, default=str) 
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': f'Error: {str(e)}'
        }
