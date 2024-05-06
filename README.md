# TaskManager-App Getting Started

1. Required Technologies
    - Node.js
    - MongoDB
    - Express
    - React
    - CORS
    - Choice of IDE (Prefered: Visual Studio Code)

2. Clone the Repo
    - git clone https://github.com/BinamraAryal/TaskManager-App.git

3. Open the repository in your code editor or IDE

4. Install the dependencies
    - $client> npm install
    - $server> npm install

5. Starting the front-end
    - $client/src> npm start

6. Starting the back-end

    * to start the back-end follow the steps below:

        - open up a new terminal and start the MongoDB server
            $server>mongod --dbpath "/data/db" 
            
            if the command shows path_error use fullpath name for --dbpath

        - again open up another terminal and start the node server
            $server/src>node server.js

By now if you have installed the required technologies and dependices correctly the task-manager application should be running on your device.