# USER-DOCUMENT-STORAGE-SERVICE
# Backend Assignment-User Document
# Storage Service

Create a REST API to search and download the file in a user storage account
<<Files are stored in an S3 (Only On s3 bucket)
<< Input

    userName: “sandy”
    Search File Name Term: “logistics”
    1. Search Files - Mandatory to attempt
    2. Upload Files -> Optional (You can write an API for upload as well)
<< Each user would be maintained as a folder. Search for user would only search his folder in S3

    1. No Authentication
    2. Files are stored in an S3 bucket for each user - ( S3 Integration )
    3. Single s3 bucket as storage
    4. Search on Filename only
    5. Optimized APIs calls
    6. Design for Extensibility
<< Things to take care of:

    1. No UI - REST Compliance APIs only
    2. Testable by Postman/Swagger (No UI)
    3. Will prefer code structured in proper fashion
    4. Will prefer JUnit
    5. Using any Java Framework ( spring boot, dropwizard etc)