Technologies Used:

Backend:
Node.js
Express.js
MongoDB Atlas
Mongoose
JSON Web Tokens (JWT) for authentication

Frontend:
React.js
React Router for routing
Context API for state management

Other:
dotenv for environment variables

How to Run the Program Locally:

1. Clone or download this repository from GitHub and extract it in a folder 
    git clone https://github.com/Pratham179/inotebook.git

2. Navigate to the Backend Directory:
    cd inotebook/backend

3. Install Backend Dependencies:
    npm install

4. Create a .env File in the Backend Directory and Add the Following Environment Variables:
    PORT=5000
    MONGODB_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING

5. Navigate to the Frontend Directory:
    cd ..

4. Install Frontend Dependencies:
    npm install
5. Start the Backend Server:
    node index.js

6. In a New Terminal, Start the Frontend Server:
    npm start

Open Your Web Browser and Visit http://localhost:3000 to Access the iNotebook Application.

Ensure that you have Node.js and npm installed on your machine. Additionally, replace YOUR_MONGODB_ATLAS_CONNECTION_STRING in the .env file with your MongoDB Atlas connection string.


You can access the deployed iNotebook application using the following link: https://pratham-inotebook.netlify.app/login