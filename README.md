# Role-Based Access Control Application  

This application is a **Role-Based Access Control (RBAC)** system built using **Node.js**, **Express**, **EJS**, **MongoDB** and **JWT** authentication, while session storage is utilized for temporary server-side data like flash messages.. The app provides an excellent starting point for projects requiring authentication and authorization features.  

---

## Key Features  
- **Authentication Options**:  
  - Email and Password authentication using **JWT**.  
  - **JWT** and **Session** are used for secure user sessions.  

- **Authorization**:  
  - Role-based access for **Admin**, **Moderator**, and **Client** users.  
  - Admins can manage users, modify roles, and delete users (except themselves).  
  - Moderators can manage **Clients** but cannot modify or delete **Admins** and themselves.  
  - Clients cannot modify or delete any user, including themselves.

- **User Roles**:  
  - **Admin**: Has full access to all features and can manage other users.  
  - **Moderator**: Limited management capabilities; can only modify or delete clients.  
  - **Client**: Regular user with no management privileges.  

- **Profile Page**: Displays logged-in user details .  

- **Pages**:  
  - **Home Page**: Displays a welcoming interface with navigation to **Register** or **Login**.  
  - **Register Page**: Allows users to create an account.  
  - **Login Page**: Authenticates users and assigns roles(By Default Client).  
  - **Manage Users Page** (accessible to Admin and Moderator roles): Displays user information and role management options.  
---

## Technologies Used  
- **Backend**:  
  - Node.js  
  - Express.js  

- **Frontend**:  
  - EJS for templating  

- **Authentication**:  
  - Inbuilt local (email/password) validation  
  - JWT for token-based authentication  
  - Sessions for secure, server-side user sessions for flash messages

- **Database**:  
  - MongoDB using **Mongoose** as the ORM  

- **Flash Messages**:  
  - **Express Flash** for displaying success and error messages  

---

## Setup Instructions  

### Step 1: Clone the repository  
    git clone https://github.com/your-username/role-based-access-control     
#### Step 2: Install the dependencies
      cd role-based-access-control
      npm install 
#### Step 3: Set up environment variables
 **Create a .env file in the project root and add the following:**:  

    PORT=your_port
    MONGODB_URI=mongodb://localhost:27017  //for local mongodb use can use mongodb cloud as well
    DB_NAME=your_database-name
    SESSION_SECRET=your_secret-key 
    JWT_SECRET=your_jwt-secret_key 
    ADMIN_EMAIL=your_admin_email
#### Step 4:  Start the application
    npm start
## Application Workflow
### Homepage
When you enter the application, the Home Page is displayed, providing options to navigate to the Register or Login page.

![Screenshot 2024-11-24 095724](https://github.com/user-attachments/assets/17033fc5-b3eb-4dfa-bcc1-b908cafb7b77)

### Register and Login
 **Register** : Users can create accounts by entering their details.
 
![Screenshot 2024-11-24 095745](https://github.com/user-attachments/assets/ec4a6489-09ac-4273-81f6-15977b0a86cb)


 ![Screenshot 2024-11-24 095850](https://github.com/user-attachments/assets/ced06fd8-bbdf-4f33-b0b0-b5774831c6dc)


 
  **Login**: Users authenticate using their email and password
  
  ![Screenshot 2024-11-24 095757](https://github.com/user-attachments/assets/98085f43-bf42-4bf3-a3de-007b16ea3d57)

  
  **Note**: If a user logs in with admin@gmail.com, they are assigned the Admin role automatically.
## Dashboard Features
### Admin:
- Access the Manage Users page.
- Modify or delete users (except themselves).
- 
  ![Screenshot 2024-11-24 100007](https://github.com/user-attachments/assets/ed743f15-7430-4799-9f76-970adb614553)

  
**Login**.Assign roles (Moderator or Client) to other users.
### Moderator:
- Manage Client users (modify roles or delete).
- Cannot modify or delete Admin users.
  
  ![Screenshot 2024-11-24 123723](https://github.com/user-attachments/assets/f2b960f6-d7ed-44ff-9113-31704fae8a1f)

### Client:

![Screenshot 2024-11-24 095906](https://github.com/user-attachments/assets/58410f7e-1bff-47dc-aa8b-4667e0b65115)

- View their profile.
- Cannot modify or delete their account or roles.


## Profile Page
- Displays the logged-in user's information. 
- Can Navigate back to the Home Page by using Back cursor.
- 
  ![Screenshot 2024-11-24 095937](https://github.com/user-attachments/assets/de14a614-8e4f-4e91-b456-d92faf117ef1)

  ![Screenshot 2024-11-24 124142](https://github.com/user-attachments/assets/0ea584ca-47af-4480-929d-ead84a932473)


## Authentication Flow
- Users log in using their email and password.
- A JWT token is generated and used for session management.
- Flash messages are displayed for success or errors during authentication or authorization.





 
