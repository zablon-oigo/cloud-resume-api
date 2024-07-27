# Cloud Resume API with AWS
This project demonstrates a serverless architecture for a Resume API using AWS Lambda and DynamoDB. The Lambda function retrieves resume data from DynamoDB and returns it in JSON format. The setup incorporates GitHub Actions for automated deployment and Terraform Cloud for infrastructure management and resource provisioning. Additionally, a React frontend has been added to provide appealing visuals and an interactive user interface for displaying the resume data.

### How It Works
- **API Gateway**: Routes requests to the AWS Lambda function.
- **AWS Lambda**: Executes the code to fetch resume data from DynamoDB.
- **DynamoDB**: Stores resume data in a structured format.
- **S3**: Hosts static assets (e.g., HTML, CSS, JavaScript) for the frontend.
- **CloudFront**: Caches and serves the frontend assets with low latency.

### Features
- **Serverless API**: Utilizes AWS Lambda to handle API requests, eliminating the need for server management and scaling automatically with demand.
- **Resume Data Storage**: Stores and retrieves resume data from DynamoDB, ensuring high availability and performance.
- **Scalable Frontend**: Deploys the frontend static assets to S3 and leverages CloudFront to ensure fast and reliable delivery to users worldwide.
- **Infrastructure as Code**: Managed using Terraform for easy provisioning and management of the AWS resources

### Tech Stack
- **AWS Lambda**: Provides a serverless compute service to run the API logic without managing servers.
- **DynamoDB**: A NoSQL database that stores the resume data in a scalable and highly available manner.
- **Terraform**: Infrastructure as Code (IaC) tool used to provision and manage AWS resources.
- **S3** (Amazon Simple Storage Service): Hosts the frontend static assets for the resume.
- **CloudFront**: Content Delivery Network (CDN) that caches and delivers the frontend assets globally with low latency.

### Setup and Deployment
1. Define Infrastructure Using Terraform:
    - Begin by configuring your AWS infrastructure with Terraform. Your Terraform configuration files, including main.tf, will define the necessary resources such as Lambda functions, DynamoDB tables, S3 buckets, and API Gateway.
    - Review and edit **main.tf** to fit your infrastructure requirements.
2. Deploy with Terraform Cloud:
   - Use Terraform Cloud for deploying your resources. Terraform Cloud provides a collaborative environment for running and managing your Terraform configurations.
   - Connect your GitHub repository with Terraform Cloud to automatically manage your Terraform state file and trigger deployments.
   - Configure Terraform Cloud to watch for changes in your GitHub repository. Terraform Cloud will automatically trigger runs and apply updates whenever there are changes to your Terraform configurations.
   - Ensure your Terraform Cloud workspace is configured with the necessary AWS credentials and variables.
3. Sync Frontend Assets to S3:
   - Configure your GitHub Actions workflow to automate the deployment of your static assets to an S3 bucket. This can be achieved by creating a GitHub Actions workflow that uses the AWS CLI to sync the contents of your React dist folder with your S3 bucket.

4. Upload DynamoDB Items:
   - Add another step in your GitHub Actions workflow to upload JSON data to DynamoDB. This ensures that the database is updated with the latest resume information as part of the continuous deployment process.
5. Deploy API:
   - Make sure your API Gateway and Lambda function are correctly deployed and linked. This should be managed within your Terraform configuration, and any updates should be applied via Terraform Cloud.
6. Deploy React Application on S3 and Create CloudFront Distribution:
   - Upload your React application's dist directory files to the S3 bucket.
   - Create a CloudFront distribution to serve your static assets from the S3 bucket. Configure CloudFront to use the S3 bucket as the origin and set up the distribution settings according to your needs
### API Endpoints
To  interact with the API use the following endpoint:
```
https://tuipma3603.execute-api.eu-north-1.amazonaws.com/prod
```
To fetch the resume data from the API, using **curl** command:
```
curl -X GET https://tuipma3603.execute-api.eu-north-1.amazonaws.com/prod
```
