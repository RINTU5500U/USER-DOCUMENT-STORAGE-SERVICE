# USER-DOCUMENT-STORAGE-SERVICE
# Backend Assignment-User Document
 Here is the assignment link <https://drive.google.com/file/d/1dVRLukEC-dFuL962-C9g_bN1ff8w-g5G/view?usp=share_link>
# USED CASES
<< 1ST OF ALL I HAVE EXPERIENCED IN [ HTML, CSS, PYTHON, JAVASCRIPT, NODE.JS, EXPRESS.JS, MONGODB, REACT, AWS (S3, EC2...), REDIS, GITHUB, CI/CD PIPELINE, DOCKER ]
<< SO THE THING IS LANGUAGE AND FRAMEWORK AS WELL AS DATABSES ARE LIKE A PIECE OF CAKE FOR EVERY DEVELOPER 
<< IT MEANS IF WE CAN DO A THING THEN WE CAN LEARN OR ACHIEVE MANY THINGS LIKE THAT AND I AM ALSO PASSIONATE FOR LEARN NEW TECHNOLOGIES

    1. In this assignment i have used <Node.js> as language instead of <Java>
    2. I have used <Express.js> instead of <springboot> .. Basically Express is a very popular framework of Node.js which is used 
       for devlop the backend of a web application
    3. I have used <MongoDB> as the primary database and use only s3 bucket to store multimedia file
    4. I have optimized the api calls .
    5. All of the codes are written in proper fashion to increase readbility ..
    6. In this assignment i have used <AWS S3> to store multimedia files like .jpg or .png or .docx ...etc
    7. According to assignment I didn't used any type of Authentication or authorization for storing and downloading as well as searching image
    8. In this assignment i have used the industry level validation package <joi> for proper validation .
    9. In this assignment a user can send any multimedia file by the help of his/her userId
    10. At the time of downloading file and searching file suppose there is a client side (frontend) and there is 3 button such as 
        1] Upload file
        2] Download file
        3] Search file
      when users try to hit the download and search file button then at that time user's Id automatically stored in a variable and 
      by the help of this userId we have to find the original file as well as original user by populate() method and 
      after that user can download as well as search file also...


<< FOR MORE INFORMATION I HAVE ATTACH MY RESUME FOR YOUR CONSIDERATION.

    Thank you for valueable time I am always reachable on my email and phone number.
    Sincerely
    Biswajit Swain
    7735771266
    mr.rintu01@gmail.com
    MY RESUME- <https://drive.google.com/file/d/1RejfDWzdVZiNco0Z34bfI5mpV22Louzm/view?usp=share_link>
    MY GITHUB PROFILE - <https://github.com/RINTU5500U>
    MY PORTFOLIO - <https://storied-panda-7f102a.netlify.app>

# THE ASSIGNMENT
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